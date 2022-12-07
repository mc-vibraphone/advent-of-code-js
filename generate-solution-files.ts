import { readdirSync, mkdirSync, writeFileSync, existsSync } from 'fs'
import axios from 'axios'
import * as cheerio from 'cheerio'

import { camelCase } from 'lodash'
const dotenv = require('dotenv')

dotenv.config()

const args = process.argv

const sessionId = process.env.sessionId

;(async () => {
  const year = (
    args[2] ? `${args[2]}` : `${new Date().getFullYear()}`.substring(2, 4)
  ).padStart(2, '0')

  const solutionYearPath = `${__dirname}/solutions-20${year}/`

  if (!existsSync(solutionYearPath)) {
    mkdirSync(solutionYearPath)
  }
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

  const adventofcodeUrl = `https://adventofcode.com/20${year}/day/${nextDay}`

  const response = await axios(adventofcodeUrl)
  const html = response.data
  const $ = cheerio.load(html)
  const title = camelCase($('h2').text().split(':')[1].replace(' ---', ''))
  let testData = $($('pre')[0]).text()
  if (testData.slice(-1) === '\n') {
    testData = testData.slice(0, -1)
  }

  console.log(`Year: 20${year} | Day: ${nextDay} | ${title}`)

  const solutionDayPath = `${solutionYearPath}${String(nextDay).padStart(
    2,
    '0',
  )}/`

  mkdirSync(solutionDayPath)

  const projectFileContent = `import { readFileSync } from 'fs'

// ${adventofcodeUrl}
// ${adventofcodeUrl}/input

const testData = [
${testData
  .split('\n')
  .map(d => `  '${d}',`)
  .join('\n')}
]
const useTestData = true

export const ${title} = () => {
  const data = useTestData
    ? testData
    : readFileSync(\`\${__dirname}/data.txt\`, 'utf8').split('\\n')
  console.log(data)
  return 0
}
`

  writeFileSync(`${solutionDayPath}solution.ts`, projectFileContent)

  const input = await axios(`${adventofcodeUrl}/input`, {
    headers: {
      Cookie: `session=${sessionId}`,
    },
  })

  writeFileSync(`${solutionDayPath}data.txt`, input.data.slice(0, -1))
})()
