const arrayOne = ['Mami', 'Bebe', 'Princess', 'Mami'];
const arrayTwo = ['yo quiero', 'yo puedo', 'yo vengo a', 'voy a'];
const arrayThree = ['encenderte', 'amarte', ' ligar', 'jugar'];
const arrayFour = ['suave', 'lento', 'rapido', 'fuerte'];
const arrayFive = ['hasta que salga el sol', 'toda la noche', ' hasta el amanecer', 'todo el dia'];
const arraySix = ['sin anestesia', 'sin compromiso', 'feis to feis', 'sin miedo'];

const randomIndexGenerator = (array) => {
    const arrayLength = array.length;
    const randomIndex = Math.floor(Math.random()*arrayLength);
    return array[randomIndex];
}

function randomReggueatonSongGenerator() {
    const wordOne = randomIndexGenerator(arrayOne);
    const wordTwo = randomIndexGenerator(arrayTwo);
    const wordThree = randomIndexGenerator(arrayThree);
    const wordFour = randomIndexGenerator(arrayFour);
    const wordFive = randomIndexGenerator(arrayFive);
    const wordSix = randomIndexGenerator(arraySix);

    return (`${wordOne}, ${wordTwo} ${wordThree} ${wordFour} uh oh oh ${wordFive} ${wordSix}`);
}

console.log(randomReggueatonSongGenerator());