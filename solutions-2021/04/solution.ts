import { readFileSync } from 'fs'

// https://adventofcode.com/2021/day/4
// https://adventofcode.com/2021/day/4/input

const testData = [
  '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
  '',
  '22 13 17 11  0',
  ' 8  2 23  4 24',
  '21  9 14 16  7',
  ' 6 10  3 18  5',
  ' 1 12 20 15 19',
  '',
  ' 3 15  0  2 22',
  ' 9 18 13 17  5',
  '19  8  7 25 23',
  '20 11 10 24  4',
  '14 21 16 12  6',
  '',
  '14 21 17 24  4',
  '10 16 15  9 19',
  '18  8 23 26 20',
  '22 11 13  6  5',
  ' 2  0 12  3  7',
]
const useTestData = false

const checkForWinningBoard = (board: { num: number; active: boolean }[][]) => {
  let isWinner = false
  if (board.some(row => row.every(c => c.active))) {
    isWinner = true
  }
  for (let i = 0; i < board[0].length; i++) {
    if (board.every(row => row[i].active)) {
      isWinner = true
    }
  }
  return isWinner
}

const calculateBoardScore = (
  board: { num: number; active: boolean }[][],
  lastCalledNumber: number,
) => {
  let sum = 0
  for (let i = 0; i < board.length; i++) {
    sum += board[i]
      .filter(row => !row.active)
      .reduce((rowSum, cell) => rowSum + cell.num, 0)
  }
  return sum * lastCalledNumber
}

const createBoardsData = (data: string[]) => {
  const boards: { num: number; active: boolean }[][][] = []
  for (let i = 2; i < data.length; i += 6) {
    boards.push(
      data.slice(i, i + 5).map(r =>
        r
          .trim()
          .split('  ')
          .join(' ')
          .split(' ')
          .map(n => ({ num: parseInt(n), active: false })),
      ),
    )
  }
  return boards
}

export const giantSquid = () => {
  const data = useTestData
    ? testData
    : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

  const numbers = data[0].split(',').map(n => parseInt(n))

  let boards = createBoardsData(data)
  let winningBoard: number | null = null
  let lastCalledNum = 0
  for (let n = 0; n < numbers.length; n++) {
    // Loop through each board setting the number active
    for (let b = 0; b < boards.length; b++) {
      for (let row = 0; row < boards[b].length; row++) {
        for (let col = 0; col < boards[b][row].length; col++) {
          if (boards[b][row][col].num === numbers[n]) {
            boards[b][row][col].active = true
          }
        }
      }
    }
    // Check each board for complete status
    for (let b = 0; b < boards.length; b++) {
      if (checkForWinningBoard(boards[b])) {
        winningBoard = b
        lastCalledNum = numbers[n]
      }
    }
    if (winningBoard) {
      break
    }
  }
  const result1 = calculateBoardScore(boards[winningBoard], lastCalledNum)

  boards = createBoardsData(data)
  let lastWinningBoard: number | null = null
  lastCalledNum = 0
  for (let n = 0; n < numbers.length; n++) {
    // Loop through each board setting the number active
    for (let b = 0; b < boards.length; b++) {
      for (let row = 0; row < boards[b].length; row++) {
        for (let col = 0; col < boards[b][row].length; col++) {
          if (boards[b][row][col].num === numbers[n]) {
            boards[b][row][col].active = true
          }
        }
      }
    }
    const nonWinners = boards
      .map((board, idx) => ({ board, idx }))
      .filter(b => !checkForWinningBoard(b.board))
      .map(b => b.idx)

    if (nonWinners.length === 1) {
      lastWinningBoard = nonWinners[0]
    }
    if (nonWinners.length === 0) {
      lastCalledNum = numbers[n]
      break
    }
  }
  const result2 = calculateBoardScore(boards[lastWinningBoard], lastCalledNum)

  return [result1, result2]
}
