const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

const total = args['n1'] + args['n2'] + args['n3'] + args['n4']
let media = total / 4

console.log('Total : ', total, 'Media : ', media)