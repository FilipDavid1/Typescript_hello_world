function equalSlices(Slices: number, People: number, SliceForOne: number){
    let Multiplier: number = People * SliceForOne;

    let x: boolean;

    if(Multiplier <= Slices)
        x = true;

    else 
        x = false;

    return x;
}

console.log(equalSlices(9, 3, 3));
