const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Как тебя звать то?:\n', line => {
    console.log(`Привет ${line}`)
    readline.close()
})