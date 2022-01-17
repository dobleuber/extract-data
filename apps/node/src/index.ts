import { exit } from 'process';
import main from './main';

main()
  .then(() => {
    exit(0);
  })
  .catch(console.error);
