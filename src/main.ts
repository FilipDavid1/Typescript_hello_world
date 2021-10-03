let a:number[] =new Array(3223,2,333,44,5);


function warOfNumbers(numbers: number[]){
    let even = 0;
    let odd = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 == 0)
            even += numbers[i];

        else
            odd +=  numbers[i];

    }

    if (even > odd)
        console.log(even - odd);

    else
        console.log(odd - even);
}

console.log(warOfNumbers(a));