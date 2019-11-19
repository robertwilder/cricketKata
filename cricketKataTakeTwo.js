let ballsPlayed = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let batmanNumber = 2;



let cricketScoreCard = ".......111....3.4..6...1..11....2....3...W"
console.log(cricketScoreCard.length)

function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)
  console.log(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}
console.log(chunkSubstr(cricketScoreCard, 6))

theScoreCutUp = chunkSubstr(cricketScoreCard, 6)

console.log(theScoreCutUp[3])

scoreCutUpCutUp = chunkSubstr(theScoreCutUp[0], 1)











// theGameBegins = () => {
//     for (var i = 0; i < cricketScoreCard.length; i++) {
//         console.log(cricketScoreCard.charAt(i));
//     }
//     istheBatsmanOut = () => {
//         if (cricketScoreCard.charAt(i) != "w"){
//             playerOneScore += 
//         }

//     }
// }


// get the switch right first 



// // toggle function
// if (score == "W")
// batsman + 1 

// if (cricketScoreCard == "W" && //  ) {  
//     playerOneScore += inGameBall
// }
// else if (cricketScoreCard == "W" && // 