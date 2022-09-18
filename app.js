let COLORS = ['rgb(255, 255, 0)','rgb(154, 205, 50)','rgb(85, 107, 47)']
//A function to generate a random number
function getRandomColor(arr){
    return  arr[Math.floor(Math.random() * arr.length)]
}
let guesses = 0;

function game(){
    while ( guesses < 3){
        let colorDom = getRandomColor(COLORS);
        let user = 'rgb(85, 107, 47)'
        if(user === colorDom){
        console.log(`UserChoice ${user} : Color ${colorDom}`)
        console.log(`Guess right, ${guesses} guesses used`)   
            break;
        }else if(user !== colorDom){
        guesses ++;
        console.log('guess again')
        console.log(`${guesses} guesses used`)
            if (guesses === 3){
                console.log(`GameOver`)
            }
        }
    }
}

console.log( game())



