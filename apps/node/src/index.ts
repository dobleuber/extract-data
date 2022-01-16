import { exit } from 'process';

import getInputs from './getInputs';
import getDates from './getDates';
import getContributions from './getContributions';

async function main() {
  const inputs = await getInputs('./inputs');

    inputs.map(({data, fileName}) => {
        const dates = getDates(data);
        console.log(fileName);
        console.log('Contribution period: ', dates);

        const contributions = getContributions(data);
        console.log('Contributions', contributions);
    })

}

main()
  .then(() => {
    exit(0);
  })
  .catch(console.error);
