let a:number[] = new Array(32,-50,30);

function differenceMaxMin( numbers: number[]){

    let sortedArray = numbers.sort((n1,n2) => n1 - n2);

    console.log(sortedArray);

    let first: number  = sortedArray[0];
    let last: number = sortedArray[numbers.length -1];

    return Math.abs(first - last);
}

console.log(differenceMaxMin(a));