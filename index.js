require('colors');

const args = process.argv.slice(2);

switch (args[0]) {
  case 'help':
    console.log('this application dose nothing'.green);
    break;

  case 'v':
    console.log('1.1.0'.blue);
    break;

  default:
    console.log('if you wont help! you have to write \'help\''.red);
}

