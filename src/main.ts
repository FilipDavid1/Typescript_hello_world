function rps(player1: string, player2: string){
    let rock:string = "rock";
    let paper:string = "paper";
    let scissors:string = "scissors";
    let winner1:string = "Player1 wins !!";
    let winner2:string = "Player2 wins !!";
    let tie:string = "TIE !!";


    if(player1 == rock && player2 == paper)
        console.log(winner2);

    else if (player1 == rock && player2 == rock)
        console.log(tie);

    
    if (player1 == paper && player2 == paper)
        console.log(tie);

    else if (player1 == paper && player2 == scissors)
        console.log(winner2);

    else if (player1 == paper && player2 == rock)
        console.log(winner1);

    
    if(player1 == scissors && player2 == paper)
         console.log(winner1); 

    else if(player1 == scissors && player2 == scissors)
        console.log(tie); 

    else if(player1 == scissors && player2 == rock)
        console.log(winner2);
}


console.log(rps("rock", "paper"));