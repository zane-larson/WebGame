let bz = 0;
let wz = 0;
let level = 3
let result = true

function reset() {

    let bruh= document.querySelectorAll(".Queen")
    bruh.forEach(e => {
        e.remove()
    })
    
    bz = 0
    wz = 0
    result = true

}

//assign the chessboard and tbody variables
let chessboard = document.getElementById("chezboard")
let tbooty = document.getElementById("tBOOTY")
let coordsArray = []
//Make functions to allow user to change color of queen
let selectedQueen = "WhiteQueen.png"


let changeToWhite = () =>{
    selectedQueen = "WhiteQueen.png"
}

let changeToBlack = () =>{
    selectedQueen= "BlackQueen.png"
}


//create function to make chess board
function createChessBoard(length) {


    for (i = 0; i < length; i++) {


        let trr = document.createElement("tr")


        for (n = 0; n < length; n++) {
            //Create black square element and assign it a class
            let blackSquare = document.createElement("td")
            blackSquare.className = "dark"



            //create white square element and assign it a class
            let whiteSquare = document.createElement("td")
            whiteSquare.className = "light"


            //Swtich the current square color
            function switchCase() {

                if (current == whiteSquare) {
                    current = blackSquare
                }
                else if (current == blackSquare) {
                    current = whiteSquare
                }

            }


            //Offset each time the for loop repeats so the colors are staggered
            if (i % 2 == 0) {

                if (n % 2 == 0) {
                    current = whiteSquare
                }
                else {
                    current = blackSquare
                }
            }
            else {
                if (n % 2 == 0) {
                    current = blackSquare
                }
                else {
                    current = whiteSquare
                }
            }


            //Append row
            current.id = (`T${n}V${i}T`)
            

            var coordString = current.id.charAt(1) + "-" + current.id.charAt(3)
            coordsArray.push(coordString)
            

            current.addEventListener("click", (e) => {

                

                // console.log(e.target)
                let box = e.target
                let whiteQueen = document.createElement("img")
                whiteQueen.src = selectedQueen
                box.appendChild(whiteQueen)
                whiteQueen.className = "Queen"
                if (selectedQueen == "WhiteQueen.png"){
                    whiteQueen.classList.add("white")
                    whiteQueen.id = `WQ${wz}`
                    wz +=1
                }
                else {
                    whiteQueen.classList.add("black")
                    whiteQueen.id = `BQ${bz}`
                    bz +=1
                }

                
                whiteQueen.addEventListener("click", (e) => {
                    let curQueen = e.target
                    curQueen += ":)"
                    
                    
                })

            })

            trr.appendChild(current)
            switchCase()



        }
        tbooty.appendChild(trr)
    }
    
}


createChessBoard(level)


//Function to find coordinates of all Queens
function checkWinStatus() {


    //Create an array containing all black queen coordiantes
    let blackQueenLocations = []
    let blackXcoords= []
    let blackYcoords= []
    for (i= 0; i< bz; i++){

    let rawBlackCoords = document.getElementById(`BQ${i}`).parentElement.id
    blackQueenLocations.push(rawBlackCoords.substring(1, rawBlackCoords.indexOf("v")) +"-"+rawBlackCoords.substring(3, rawBlackCoords.indexOf("t")))
    blackXcoords.push(rawBlackCoords.substring(1, rawBlackCoords.indexOf("v")))
    blackYcoords.push(rawBlackCoords.substring(3, rawBlackCoords.indexOf("t")))

    }    


    //Create 2 arrays containing the x and y coordinates of the white pieces
    let whiteXcoords = []
    let whiteYcoords = []
    for (i=0; i<wz; i++){
        let rawWhiteCoords = document.getElementById(`WQ${i}`).parentElement.id
         whiteXcoords.push(rawWhiteCoords.substring(1, rawWhiteCoords.indexOf("V")))
         whiteYcoords.push(rawWhiteCoords.substring(3, rawWhiteCoords.indexOf("T")))

         



    }

    console.log("white x coord is " +whiteXcoords)
    console.log("white y coord is "+whiteYcoords)
    console.log("black x coord is "+blackXcoords)
    console.log("black y coord is "+blackYcoords)



//Checks to see if black and white queens share any diagonal positions

illegalSquares = []

for(i=0; i<blackQueenLocations.length; i++){

    
    for(j=0; j<level + 1; j++){
        //check top right diagonal
        illegalSquares.push(`${Number(blackXcoords[i]) + j}-${Number(blackYcoords[i])-j}`)

        //check bottom right diagonal
        illegalSquares.push(`${Number(blackXcoords[i]) + j}-${Number(blackYcoords[i])+j}`)

        //check bottom left diagonal
        illegalSquares.push(`${Number(blackXcoords[i]) -j}-${Number(blackYcoords[i])+j}`)

        //check top left diagonal
        illegalSquares.push(`${Number(blackXcoords[i]) - j}-${Number(blackYcoords[i])-j}`)

        //check above piece
        illegalSquares.push(`${Number(blackXcoords[i])}-${Number(blackYcoords[i])-j}`)

        //check Right of piece
        illegalSquares.push(`${Number(blackXcoords[i]) + j}-${Number(blackYcoords[i])}`)

        //check bellow piece
        illegalSquares.push(`${Number(blackXcoords[i])}-${Number(blackYcoords[i])+j}`)

        //check left of piece
        illegalSquares.push(`${Number(blackXcoords[i]) - j}-${Number(blackYcoords[i])}`)


    }

}


if(level == 3){
    solution = 1
    console.log(solution)
}
else if(level == 4){
    solution = 2
    console.log(solution)
}
else if(level == 5){
    solution = 4
    console.log(solution)
}
else if(level == 6){
    solution = 5
}
else if(level == 7){
    solution = 7
}
else if(level == 8){
    solution = 9
}
else if(level == 9){
    solution = 12
}
else if(level == 10){
    solution = 14
}
else if(level == 11){
    solution = 17
}
else if(level == 12){
    solution = 21
}




if (bz != 0 && wz != 0){
    for(g=0; g<whiteXcoords.length; g++){

        if(illegalSquares.includes(`${whiteXcoords[g]}-${whiteYcoords[g]}`) == false && solution == wz){
            console.log(bz)
        }
        else{
            result = false
            console.log(wz)
        }
    }
}
else{
    result = false
}

if(result == false){
    alert("Try agian")
}
else{
    changeLevel()
}

}

function changeLevel() {

    level += 1
    reset()
    let bruh= document.querySelectorAll(".light")
    bruh.forEach(e => {
        e.remove()
    })
    let bruh2= document.querySelectorAll(".dark")
    bruh2.forEach(e => {
        e.remove()
    })
    createChessBoard(level)

}
function changeLevelButton(levelToChangeTo) {

    level = levelToChangeTo
    reset()
    let bruh= document.querySelectorAll(".light")
    bruh.forEach(e => {
        e.remove()
    })
    let bruh2= document.querySelectorAll(".dark")
    bruh2.forEach(e => {
        e.remove()
    })
    createChessBoard(level)

}

