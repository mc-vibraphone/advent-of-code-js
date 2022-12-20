import { useEffect } from 'react'
import * as solutionExports from './solution'
import type { FC } from 'react'
import type { VisualizationComponentInfo } from '~/lib/types/VisualizationComponentInfo'

interface CampCleanupVisualizationProps {
  componentInfo: VisualizationComponentInfo
}

const CampCleanupVisualization: FC<CampCleanupVisualizationProps> = ({
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
      <div> Camp Cleanup Visualization</div>
    </div>
  )
}

export default CampCleanupVisualization
