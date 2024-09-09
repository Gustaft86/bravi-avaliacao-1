const BracketsValidator = require('./validators/BracketsValidator');
const InputService = require('./services/InputService');

async function main() {
    const inputService = new InputService();
    const validator = new BracketsValidator();

    console.log('Digite uma sequência de colchetes para verificar ou digite "fim" para encerrar.');

    let continueRunning = true;

    while (continueRunning) {
        const input = await inputService.askQuestion('> ');

        if (input.toLowerCase() === 'fim') {
            continueRunning = false;
        } else {
            const isValid = validator.isValid(input);
            if (isValid) {
                console.log('A sequência é válida.');
            } else {
                console.log('A sequência não é válida.');
            }
        }
    }

    inputService.close();
}

main();
