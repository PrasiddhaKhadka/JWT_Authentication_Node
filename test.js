// const myName = 'Prasiddha Khadka';

// const flipName = myName.split(' ').reverse().join(' ');

// console.log(flipName);

const myName = 'Ajay';
let result = "";

for (let i = 0; i < myName.length; i++) {
    const char = myName[i].toLowerCase();

    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);  // Ajy


 


