
function countBirds() {
    let count = 0;
    return function () {
        count += 1;
        return count + ' birds';
    }
}
/* TO ACCESS THE ABOVE FUNCTION, ASSIGN IT TO VARIABLE AND RUN FROM THERE E.G
let birdCounter = countBirds();
birdCounter();
*/


//Following function will always return the value 1;
function countDogs() {
    let count = 0;
    count += 1;
    return count + ' dogs';
}


function counterDogs() {
    let count = 0;
    return function () {
        count++;
        return count + ' dogs';
    }
}

function makeCounter(noun){
    let count = 0;
    return function (){
        count++;
        return count + ' ' +noun;
    }

}
