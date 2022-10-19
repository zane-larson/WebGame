//Black queen count
let bz = 0;

//White Queen count
let wz = 0;

//board size
let level = 3

//setting condition to check for win
let result = true

function reset() {
    //Remove all queens
    let bruh= document.querySelectorAll(".Queen")
    bruh.forEach(e => {
        e.remove()
    })
    
    //Set variables to starting conditions
    bz = 0
    wz = 0
    result = true

}

//assign the chessboard and tbody variables
let chessboard = document.getElementById("chezboard")
let tbooty = document.getElementById("tBOOTY")

//Make functions to allow user to change color of queen
let selectedQueen = "assets/WhiteQueen.png"

let changeToWhite = () =>{
    selectedQueen = "assets/WhiteQueen.png"
}

let changeToBlack = () =>{
    selectedQueen= "assets/BlackQueen.png"
}


//create function to make chess board
function createChessBoard(length) {

    document.getElementById("header").textContent = (`Level ${level}`)


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


            //Set the coordinate ID for each square of the board
            current.id = (`T${n}V${i}T`)
            
            
            current.addEventListener("click", (e) => {
                
                
                
                //Place Queens in boxes with event listener
                let box = e.target
                let whiteQueen = document.createElement("img")
                whiteQueen.src = selectedQueen
                
                //Check to make sure queen is being places in a box
                if(box.childElementCount < 1){
                    if(box.className == "dark" || box.className == "light"){
                
                    box.appendChild(whiteQueen)
                    
                    //Assign queens an ID when placed
                    whiteQueen.className = "Queen"
                    if (selectedQueen == "assets/WhiteQueen.png"){
                        whiteQueen.classList.add("white")
                        whiteQueen.id = `WQ${wz}`
                        wz +=1
                    }
                    else {
                        whiteQueen.classList.add("black")
                        whiteQueen.id = `BQ${bz}`
                        bz +=1
                    }
                }}
            })
            //Creation of the Rows
            trr.appendChild(current)
            switchCase()



        }
        //creation of the columns
        tbooty.appendChild(trr)
    }
    
}

//Activate function to make chess board
createChessBoard(level)


//Function to find coordinates of all Queens and check win donditions
function checkWinStatus() {


    //Create an array containing all black queen coordiantes
    let blackQueenLocations = []
    let blackXcoords= []
    let blackYcoords= []

    //Loop through all queens and assign coordinates to variables for each
    for (i= 0; i< bz; i++){

    let rawBlackCoords = document.getElementById(`BQ${i}`).parentElement.id
    blackQueenLocations.push(rawBlackCoords.substring(1, rawBlackCoords.indexOf("V")) +"-"+rawBlackCoords.substring(3, rawBlackCoords.indexOf("t")))
    blackXcoords.push(rawBlackCoords.substring(1, rawBlackCoords.indexOf("V")))
    blackYcoords.push(rawBlackCoords.substring(3, rawBlackCoords.lastIndexOf("T")))

    }    


    //Create 2 arrays containing the x and y coordinates of the white pieces
    let whiteXcoords = []
    let whiteYcoords = []
    for (i=0; i<wz; i++){
        let rawWhiteCoords = document.getElementById(`WQ${i}`).parentElement.id
        
         whiteXcoords.push(rawWhiteCoords.substring(1, rawWhiteCoords.indexOf("V")))
         whiteYcoords.push(rawWhiteCoords.substring(3, rawWhiteCoords.lastIndexOf("T")))
        console.log(rawWhiteCoords)
         



    }


//Checks to see if black and white queens share any diagonal positions

illegalSquares = []


//Assign illegal square status to all coordinates in each direction of the black queens
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

//set Requred pairs of queens for each level
if(level == 3){
    solution = 1
}
else if(level == 4){
    solution = 2
}
else if(level == 5){
    solution = 4
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



//Check to make sure white queens are not within the illegal squares
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
    document.getElementById("header").textContent = ("Failure")
    setTimeout( () => {
        document.getElementById("header").textContent = (`Level ${level}`)
    }, 2000)
    

}
else{
    
    changeLevel()
}

}


//Change to next level and reset board
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

//Change to level selected and reset board
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

