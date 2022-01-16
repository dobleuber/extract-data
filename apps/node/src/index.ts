import { exit } from 'process';

import getInputs from './getInputs';
import getDates from './getDates';

async function main() {
  const inputs = await getInputs('./inputs');

    inputs.map(({data, fileName}) => {
        const dates = getDates(data);
        console.log(fileName);
        console.log(dates);
    })
}

main()
  .then(() => {
    console.log('completed');
    exit(0);
  })
  .catch(console.error);
