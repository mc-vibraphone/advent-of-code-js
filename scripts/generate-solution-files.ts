import { readdirSync, mkdirSync, writeFileSync, existsSync } from 'fs'
import axios from 'axios'
import * as cheerio from 'cheerio'
import { camelCase, startCase } from 'lodash'
import dotenv from 'dotenv'
import { generateDynamicImportFile } from './generate-dynamic-import-file'

dotenv.config()

const args = process.argv

const sessionId = process.env.sessionId
const solutionsDir = process.env.solutions_dir

const generateSolutionFiles = async () => {
  if (!!args[2] && args[2].length !== 2 && args[2].length !== 4) {
    throw 'Invalid year provided'
  }

  const year = args[2]
    ? `${args[2].length === 2 ? `20${args[2]}` : args[2]}`
    : `${new Date().getFullYear()}`

  const solutionsPath = `${__dirname}/../app/${solutionsDir}/`
  if (!existsSync(solutionsPath)) {
    mkdirSync(solutionsPath)
  }

  const solutionYearPath = `${__dirname}/../app/${solutionsDir}/${year}/`

  if (!existsSync(solutionYearPath)) {
    mkdirSync(solutionYearPath)
  }

  let day = !!args[3] ? parseInt(args[3]) : null
  if (!day) {
    const existingDayDirectories = readdirSync(solutionYearPath, {
      withFileTypes: true,
    })
      .filter(dir => dir.isDirectory())
      .map(dir => dir.name)
      .map((name: string) => parseInt(name))
    let nextDay = 0
    for (let id = 1; id <= 31; id++) {
      if (!existingDayDirectories.includes(id)) {
        nextDay = id
        break
      }
    }
    day = nextDay
  }

  const adventofcodeUrl = `https://adventofcode.com/${year}/day/${day}`

  const response = await axios(adventofcodeUrl).catch(() => {
    throw 'Invalid day requested'
  })
  const html = response.data
  const $ = cheerio.load(html)
  const displayName = $('h2').text().split(':')[1].replace(' ---', '')
  const title = camelCase(displayName)

  console.log(
    `Generating Solutions Files for: (Year: ${year} | Day: ${day} | ${title})`,
  )

  const solutionDayPath = `${solutionYearPath}${String(day).padStart(2, '0')}/`

  mkdirSync(solutionDayPath)

  const solutionFileContent = `// ${adventofcodeUrl}
// ${adventofcodeUrl}/input

import { puzzleData, testData } from './data'

const part1 = (data: string[]) => {
  return null
}

const part2 = (data: string[]) => {
  return null
}

export const solutionData = {
  puzzleData,
  testData,
}

export const ${title} = () => {
  const useTestData = true
  const data = useTestData ? testData : puzzleData

  console.log(data)

  return [part1(data), part2(data)]
}

// Other exports should go below
`
  writeFileSync(`${solutionDayPath}solution.ts`, solutionFileContent)

  // TODO: This test data is often not the correct part of the page being pulled
  let testData = $($('pre')[0]).text()
  if (testData.slice(-1) === '\n') {
    testData = testData.slice(0, -1)
  }

  const input = await axios(`${adventofcodeUrl}/input`, {
    headers: {
      Cookie: `session=${sessionId}`,
    },
  })

  const dataFileContent = `export const testData = [
${testData
  .split('\n')
  .map((l: string) => `  '${l}',`)
  .join('\n')}
]
  
export const puzzleData = [
${input.data
  .slice(0, -1)
  .split('\n')
  .map((l: string) => `  '${l}',`)
  .join('\n')}
]
  `
  writeFileSync(`${solutionDayPath}data.ts`, dataFileContent)

  const componentName = `${startCase(title)}Visualization`.split(' ').join('')

  const visualizationComponentFileContent = `import { useEffect } from 'react'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from '~/lib/types/VisualizationComponentInfo'

interface ${componentName}Props {
  componentInfo: VisualizationComponentInfo
}

const ${componentName}: FC<${componentName}Props> = ({
  componentInfo,
}) => {
  const { testData, puzzleData } = solutionExports['solutionData']
  const data = testData

  useEffect(() => {
    console.log(componentInfo)
    console.log(Object.keys(solutionExports))
    console.log(testData, puzzleData)
  }, [])
  return (
    <div className="h-full">
      <div>${displayName} Visualization</div>
    </div>
  )
}

export default ${componentName}
`
  writeFileSync(
    `${solutionDayPath}Visualization.tsx`,
    visualizationComponentFileContent,
  )

  generateDynamicImportFile()
}

generateSolutionFiles().catch(e => {
  console.log(e)
})
