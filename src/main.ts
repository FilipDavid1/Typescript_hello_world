

let a:number[] = new Array(1,34,54,120,33);

function multiplyByLenght(arr:number[]){
    arr.forEach(element => {
        console.log(element * arr.length);
    });
}


console.log(multiplyByLenght(a));