function canCapture(a, b){
    if(a[0] == b[0] || a[1] == b[1])
        console.log(true);
    else
        console.log(false);
}


console.log(canCapture("E5", "J5"));