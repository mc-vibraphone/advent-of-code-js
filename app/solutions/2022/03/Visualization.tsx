import { useEffect } from 'react'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from '~/lib/types/VisualizationComponentInfo'

interface RucksackReorganizationVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const RucksackReorganizationVisualization: FC<RucksackReorganizationVisualizationProps> = ({
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
      <div> Rucksack Reorganization Visualization</div>
    </div>
  )
}

export default RucksackReorganizationVisualization
