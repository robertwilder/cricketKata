//////// Attempt one - take away dots and just focus on the numbers 
//// 1, 3, switches players but adds to players score 
/// 2, 4, 6 adds to the score and stays with the player 
// Wicket player is removed from the game and the next player get involved 
/*
.......1 //player 1
1 // player 1 - switch to 2
1 // player 2 - switch to 1
....
3 // player 1 - switch to 2
.
4 // player 2
..
6 // player 2
...
1 // player 2 switch to 1
..
1 // player 1 switch to 2
1 // player 2 switch to 1
....
2 // player 1
....
3 // player 1 switch to 2
...
W... // player 2 out 
1 // player 3 switch to 1
1 // player 1 switch to 3
...
1 // player 3 switch to 1
..
2 // player 1
...
3 // player 1 switch to 3 
3 // player 3 switch to 1
...

4 // player 1
4 // player 1
...

W // player 1 out. 


// 3 players .......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W
// 11134611123W11123344W // numbers without '.'
*/


let num
let score = 0

if (num == 2 || num == 4 || num == 6){
    score + num
}
else if (num == 1 || num ==3)
    score + num + score++


let batmanNumber = 1

batman = batmanNumber++

console.log(batman++)

class Batsman{
    constructor(numberOfRuns, outOrNot){
    this._numberOfRuns = numberOfRuns
    this._outOrNot = outOrNot
    
    }
    get numberOfRuns(){
        return this._numberOfRuns
    }
    get outOrNot(){
        return this._outOrNot
    }
}
const batman1 = new Batsman(24 , "out" )
const batman2 = new Batsman(13 , "out" )
const batman3 = new Batsman(5 , "Not out" )
const batman4 = new Batsman(0 , "out" )
const batman5 = new Batsman(0 , "out" )
const batman6 = new Batsman( 0 , "out" )
const batman7 = new Batsman( 0 , "out" )
const batman8 = new Batsman( 0 , "out" )
const batman9 = new Batsman( 0 , "out" )
const batman10 = new Batsman( 0 , "out" )
const batman11 = new Batsman( 0 , "out" )





console.log(batman1)
console.log(batman2)
console.log(batman3)