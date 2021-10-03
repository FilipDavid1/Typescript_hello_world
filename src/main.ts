
function equal(a: number, b: number, c: number){
    if (a == b && a == c && b == c)
    return 3;

    else if (a == b || a == c)
    return 2;

    else 
    return 0;
}

console.log(equal(1,2,1));