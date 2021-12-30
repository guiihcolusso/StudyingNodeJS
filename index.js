const inquirer = require('inquirer')

inquirer.prompt([{
    name: 'n1', 
    message: 'qual a Primeira Nota : '
},{
    name: 'n2', 
    message: 'qual a Segunda Nota : '
},{
    name: 'n3', 
    message: 'qual a Terceira Nota : '
},{
    name: 'n4', 
    message: 'qual a Quarta Nota : '
}]).then((answers) =>{

    const total = parseFloat(answers.n1) + parseFloat(answers.n2) + parseFloat(answers.n3) + parseFloat(answers.n4)
    const media = total / 4


    console.clear()
    console.log('Total das notas informadas : ', total)
    console.log('Media das notas informadas : ', media)


}).catch(err => console.log(err))