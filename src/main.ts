function isTriangle(a:number, b:number, c:number){
    let x: boolean;

    if(a < b && b < c)
        x = true;

    else if(a == b && b == c)
        x = true;

    else
        x = false;


    return x;
}

console.log(isTriangle(22,1,3.4));