
// https://adventofcode.com/2022/day/5
// https://adventofcode.com/2022/day/5/input

import * as stream from 'stream';
import * as fs from 'fs';
import * as readline from 'readline';


const testData = [
  '    [D]    ',
  '[N] [C]    ',
  '[Z] [M] [P]',
  ' 1   2   3 ',
  '',
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2',
]

	const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));

	//const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

export const supplyStacks = () => {

  let stacks:string[] = [];
  let lines:string[] = [];

  rl.on('line', (line: string) => {
    if(!line.includes('1')) {
      lines.push(line);
    }
    else{
      lines.forEach(line => { console.log(line); });
      console.log(line);
    }
  });
  
  rl.on('close', () => {

    console.log(`EOF`);
    
  });

  rl.on('error', (error: Error) => {
    console.log(error);
  });
  return 0
}
