const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(array){
        this.field = array;
    }
    // get field() {
    //     return this.field
    // }

    print(fieldArray) {
        let newArray = [];
        fieldArray.forEach(subArray => {newArray.push(subArray.join(''))});
        newArray = newArray.join("\n");
        console.log(newArray);;
    }
    playGame(currentGame){
        this.print(currentGame);
        let row = 0;
        let col = 0;
        let finish = 0;
        while (finish < 1){
            let move = prompt('Which Way? ');
            switch(move){
                case 'd':
                    if (col + 1 === currentGame[0].length){
                        console.log('Invalid Movement: You Lost');
                        finish++;
                    } else if (currentGame[row][col + 1] === hat){
                        console.log('You found your Hat: You Won!')
                        finish++
                    } else if (currentGame[row][col + 1] === hole){
                        console.log('You fell in a Hole: You Lost');
                        finish++
                    } else {
                        currentGame[row][col + 1] = pathCharacter;             
                        col++;
                    }                
                    this.print(currentGame);
                    break;   
                case 's':
                    if (row + 1 === currentGame.length){
                        console.log('Invalid Movement: You Lost');
                        finish++;
                    } else if (currentGame[row + 1][col] === hat){
                        console.log('You found your Hat: You Won!')
                        finish++
                    } else if (currentGame[row + 1][col] === hole){
                        console.log('You fell in a Hole: You Lost');
                        finish++
                    } else {
                        currentGame[row + 1][col] = '*';
                        row++
                    }                
                    this.print(currentGame);
                    break;
                case 'a':
                    if (col - 1 < 0){
                        console.log('Invalid Movement: You Lost');
                        finish++;
                    } else if (currentGame[row][col - 1] === hat){
                        console.log('You found your Hat: You Won!')
                        finish++
                    } else if (currentGame[row][col - 1] === hole){
                        console.log('You fell in a Hole: You Lost');
                        finish++
                    } else{
                        currentGame[row][col - 1] = pathCharacter;             
                        col--
                    }                
                    this.print(currentGame);
                    break;
                case 'w':
                    if (row - 1 < 0){
                        console.log('Invalid Movement: You Lost');
                        finish++;
                    } else if (currentGame[row - 1][col] === hat){
                        console.log('You found your Hat: You Won!')
                        finish++
                    } else if (currentGame[row - 1][col] === hole){
                        console.log('You fell in a Hole: You Lost');
                        finish++
                    } else{
                        currentGame[row + 1][col] = '*';
                        row++                
                    }
                    this.print(currentGame);
                    break;
                }
            }
        }

    static generateField(height, width) {
        let field = [];
        for ( let i = 0; i<height; i++) {
            let row = [];
            let j = 0;
            while ( j < width ) {
                row.push(fieldCharacter);
                j++
            }
            field.push(row);
        }
        field[0][0] = pathCharacter;
        const randomIndex = (num) => {
            return Math.floor(Math.random()*num)
        };
        let row = randomIndex(height);
        let col = randomIndex(width);
        while ((field[row][col] !== pathCharacter)) {
            field[row][col] = hat;
            break;
        }
        let oCount = 0;
        while (oCount < (Math.floor(width*height*0.2))) {
            let oRow = randomIndex(height);
            let oCol = randomIndex(width);
            
            if (field[oRow][oCol] === pathCharacter || field[oRow][oCol] === hat) {
                 continue;
            } else {
                field[oRow][oCol] = hole;
                oCount++
            }
        }
        if (field[1][0] === hole || field[0][1] === hole) {
            field.splice(1, fieldCharacter)
        }
        return field;
    }
}
const newGame = new Field(Field.generateField(5,10))
const currentGame = newGame.field;
newGame.playGame(currentGame);
