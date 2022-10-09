

//assign the chessboard and tbody variables
let chessboard = document.getElementById("chezboard")
let tbooty = document.getElementById("tBOOTY")





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

            current.addEventListener("click", (e) => {
                console.log(e.target)
                let box = e.target
                let whiteQueen = document.createElement("img")
                whiteQueen.src = "WhiteQueen.png"
                box.appendChild(whiteQueen)

            })

            trr.appendChild(current)
            switchCase()



        }
        tbooty.appendChild(trr)
    }
}

createChessBoard(5)



