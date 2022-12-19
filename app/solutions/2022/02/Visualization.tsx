import { useEffect } from 'react'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from '~/lib/types/VisualizationComponentInfo'

interface RockPaperScissorsVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const RockPaperScissorsVisualization: FC<RockPaperScissorsVisualizationProps> = ({
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
      <div> Rock Paper Scissors Visualization</div>
    </div>
  )
}

export default RockPaperScissorsVisualization
