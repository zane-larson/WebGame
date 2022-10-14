let bz = 0;
let wz = 0;
let level = 4
let result = true

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
                    curQueen.remove()
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
    blackQueenLocations.push(rawBlackCoords.charAt(1) +"-"+rawBlackCoords.charAt(3))
    blackXcoords.push(rawBlackCoords.charAt(1))
    blackYcoords.push(rawBlackCoords.charAt(3))
    
    }    


    //Create 2 arrays containing the x and y coordinates of the white pieces
    let whiteXcoords = []
    let whiteYcoords = []
    for (i=0; i<wz; i++){
        let rawWhiteCoords = document.getElementById(`WQ${i}`).parentElement.id
         whiteXcoords.push(rawWhiteCoords.charAt(1))
         whiteYcoords.push(rawWhiteCoords.charAt(3))
        
    }

    console.log("white x coord is " +whiteXcoords)
    console.log("white y coord is "+whiteYcoords)
    console.log("black x coord is "+blackXcoords)
    console.log("black y coord is "+blackYcoords)




//Checks if black and white queens share any horizonal or veritcal positions
    // for(i=0; i<whiteXcoords.length; i++){

    //     for(j=0; j<blackXcoords.length; j++){
            
    //         if(whiteXcoords[i] == blackXcoords[j]){
    //             console.log("failure")
    //         }
    //         else{console.log("success")}

    //         if(whiteYcoords[i] == blackYcoords[j]){
    //             console.log("failure")
    //         }
    //         else{console.log("success")}
    //     }
    // }

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

for(g=0; g<whiteXcoords.length; g++){

    if(illegalSquares.includes(`${whiteXcoords[g]}-${whiteYcoords[g]}`) == false){
        
    }
    else{
        result = false
    }
}

if(result == false){
    alert("failure")
}
else{
    alert("success")
}

}

