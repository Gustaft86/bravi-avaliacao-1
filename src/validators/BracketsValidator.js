class BracketsValidator {
    constructor() {
        this.bracketsMap = {
            '(': ')',
            '{': '}',
            '[': ']'
        };
    }

    isValid(input) {
        const stack = [];

        for (const char of input) {
            if (this.bracketsMap[char]) {
                stack.push(this.bracketsMap[char]);
            } else {
                const lastBracket = stack.pop();
                if (lastBracket !== char) {
                    return false; // Se não houver correspondência, a sequência não é válida
                }
            }
        }

        // Se a pilha estiver vazia, todos os colchetes foram fechados corretamente
        return stack.length === 0;
    }
}

module.exports = BracketsValidator;
