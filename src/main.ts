
function totalDistance(stepLenght:number, stepHeight:number, towerHeight:number) {
    if(stepLenght < 0){
        return false;
    }
    else if(stepHeight < 0){
        return false;
    }
    else if(towerHeight < 0){
        return false;
    }


    let divisor = stepLenght + stepHeight;

    return (towerHeight / stepHeight) * divisor;
}


console.log(totalDistance(0.2, 0.4, 100));