// DO NOT EDIT - AUTOGENERATED

import vis2022_20 from '~/solutions/2022/20/Visualization'
import vis2022_18 from '~/solutions/2022/18/Visualization'
import vis2022_14 from '~/solutions/2022/14/Visualization'
import vis2022_13 from '~/solutions/2022/13/Visualization'
import vis2022_12 from '~/solutions/2022/12/Visualization'
import vis2022_10 from '~/solutions/2022/10/Visualization'
import vis2022_09 from '~/solutions/2022/09/Visualization'
import vis2022_08 from '~/solutions/2022/08/Visualization'
import vis2022_07 from '~/solutions/2022/07/Visualization'
import vis2022_06 from '~/solutions/2022/06/Visualization'
import vis2022_05 from '~/solutions/2022/05/Visualization'
import vis2022_04 from '~/solutions/2022/04/Visualization'
import vis2022_03 from '~/solutions/2022/03/Visualization'
import vis2022_02 from '~/solutions/2022/02/Visualization'
import vis2022_01 from '~/solutions/2022/01/Visualization'

export const components: { [key: string]: any } = {
  vis2022_20,
  vis2022_18,
  vis2022_14,
  vis2022_13,
  vis2022_12,
  vis2022_10,
  vis2022_09,
  vis2022_08,
  vis2022_07,
  vis2022_06,
  vis2022_05,
  vis2022_04,
  vis2022_03,
  vis2022_02,
  vis2022_01,
}

const getVisualizationComponent = (year: number, day: number) => {
  return components[`vis${year}_${day.toString().padStart(2, '0')}`]
}

export default getVisualizationComponent
  
  