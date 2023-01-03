// https://adventofcode.com/2022/day/16
// https://adventofcode.com/2022/day/16/input

import { puzzleData, testData } from './data'

const proboscideaVolcanium = () => {
  const useTestData = true
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  const network = generateValveNetwork(data)
  return traverseNetwork({
    network,
    path: [network[0].id],
    time: 0,
    pressure: 0,
  })
}

const part2 = (data: string[]) => {
  return null
}

export default proboscideaVolcanium

export const solutionData = {
  puzzleData,
  testData,
}

export const generateValveNetwork = (data: string[]) => {
  const valveNetork: Valve[] = []
  data.forEach(row => {
    const rowData = row
      .replace('Valve ', '')
      .replace('has flow rate=', '')
      .replace('tunnel ', 'tunnels ')
      .replace('leads ', 'lead ')
      .replace('valve ', 'valves ')
      .replace('; tunnels lead to valves', '')
      .split(', ')
      .join(',')
      .split(' ')
    valveNetork.push(
      new Valve({
        id: rowData[0],
        flow: parseInt(rowData[1]),
        connectsTo: rowData[2].split(','),
      }),
    )
  })
  valveNetork.forEach(valve => {
    valve.connectsTo.forEach(connection => {
      valve.connections.push(
        valveNetork.find(v => v.id === connection) as Valve,
      )
    })
  })
  valveNetork.forEach(valve => {
    valve.paths = valve.connections.reduce((paths, connection) => {
      paths[connection.id] = [connection.id]
      return paths
    }, {} as { [key: string]: string[] })

    for (let i = 0; true; i++) {
      let breakCondition = true
      Object.keys(valve.paths).forEach(key => {
        const pathEnd = valve.paths[key].slice(-1)[0]
        const pathEndValve = valveNetork.find(v => v.id === pathEnd) as Valve
        const pathEndValveConnections = pathEndValve.connections.filter(
          c => !Object.keys(valve.paths).includes(c.id) && c.id !== valve.id,
        )
        pathEndValveConnections.forEach(v => {
          valve.paths[v.id] = [...valve.paths[key], v.id]
          breakCondition = false
        })
      })
      if (breakCondition) {
        break
      }
    }
  })
  return valveNetork
}

export interface NetworkTraversal {
  network: Valve[]
  path: string[]
  time: number
  pressure: number
}

export const traverseNetwork = ({
  network,
  path,
  time,
  pressure,
}: NetworkTraversal) => {
  const relevantValves = network.filter(
    valve => valve.flow > 0 && !path.includes(valve.id),
  )
  const currentValve = network.find(v => v.id === path.slice(-1)[0]) as Valve

  const pressureThroughput = path
    .map(vid => network.find(v => v.id === vid)?.flow || 0)
    .reduce((sum, num) => sum + num, 0)

  if (relevantValves.length === 0) {
    return pressure + (30 - time) * pressureThroughput
  }

  const maxPressureValue: number = relevantValves.reduce(
    (maxPressure, valve) => {
      // Time needed to travel to the valve and open it
      const distance = currentValve.paths[valve.id].length + 1

      // If time + distance = 30 then there will be no time to capitalize on the pressure release
      if (time + distance < 30) {
        const pathTraversal = traverseNetwork({
          network,
          path: [...path, valve.id],
          pressure: pressure + distance * pressureThroughput,
          time: time + distance,
        })
        return Math.max(maxPressure, pathTraversal)
      } else {
        const pathFinalPressure = pressure + (30 - time) * pressureThroughput
        return Math.max(maxPressure, pathFinalPressure)
      }
    },
    0,
  )

  return maxPressureValue
}

export class Valve {
  id: string
  flow: number
  connectsTo: string[]
  connections: Valve[]
  on: boolean
  paths: { [key: string]: string[] }

  constructor({
    id,
    flow,
    connectsTo,
  }: {
    id: string
    flow: number
    connectsTo: string[]
  }) {
    this.id = id
    this.flow = flow
    this.connectsTo = connectsTo
    this.connections = []
    this.on = false
    this.paths = {}
  }
}
