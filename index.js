// GameBoard dimensions
const gameBoardWidth = document.querySelector(".game-board").clientWidth;
const gameBoardHeight = document.querySelector(".game-board").clientHeight;
const gameBoardElement = document.querySelector(".game-board");

//getting Game Info Banner
const gameInfoElement = document.querySelector(".game-info-banner")

// getting info Ditto
const ditto = document.querySelector(".ditto");
const dittoWidth = ditto.clientWidth;
const dittoHeight = ditto.clientHeight;

// INIT THE GAME 
class game {
    constructor(dittoHealth, fastFoodPassed, gameIsOver) {
        this.dittoHealth = 10,
            this.fastFoodPassed = 0,
            this.gameOver = false
    }
    newGame() {
        return this.dittoHealth, this.fastFoodPassed
    }
    gameIsOver() {
        console.log("GAME OVER");
        return this.gameIsOver = true
    }
}
// init Ditto in the GAMEBOARD
let positionYDitto = 300;
let positionXDitto = 50;
let speedDitto = 40;
let dittoHealth = 10;
let fastFoodPassed = 0;


//init the DITOHEALTH, SCORE and NAME in the HTML 

    let dittoLife = document.createElement("game-info-banner")
    dittoLife.classList.add("dittoLife")
    gameInfoElement.appendChild(dittoLife)
    dittoLife.textContent = `Ditto Health: ${dittoHealth}`
    
    let score = document.createElement("fastFoodPassed")
    score.classList.add("dittoLife")
    gameInfoElement.appendChild(score)
    score.textContent = `Score: ${fastFoodPassed}`

//init fastFoodArray to save the fastFoodPassed and save the length as a SCORE game.
const fastFoodArray = []

//getting info and init FastFood 1
const fastFood1 = document.querySelector(".fast-food-1");
let speedFastFood1 = 4;
let directionXFastFood1 = "left"

//getting info and init FastFood 2
const fastFood2 = document.querySelector(".fast-food-2");
let speedFastFood2 = 50;
let directionXFastFood2 = "left"

//getting info and init FastFood 3
const fastFood3 = document.querySelector(".fast-food-3");
let speedFastFood3 = 6;
let directionXFastFood3 = "left"



// create the FastFood1
function createFastFood1() {
    const newFastFood1Element = document.createElement("div");
    newFastFood1Element.classList.add("fast-food-1")

    // generate random movement
    const newFastFood1 = new FastFoodItem1(newFastFood1Element, 1, "down")
    gameBoardElement.appendChild(newFastFood1Element)
    fastFoodArray.push(newFastFood1)
}

// create the FastFood2
function createFastFood2() {
    const newFastFood2Element = document.createElement("div");
    newFastFood2Element.classList.add("fast-food-2")
    const newFastFood2 = new FastFoodItem2(newFastFood2Element, 1, "down")
    gameBoardElement.appendChild(newFastFood2Element)
    fastFoodArray.push(newFastFood2)
}

// create the FastFood3
function createFastFood3() {
    const newFastFood3Element = document.createElement("div");
    newFastFood3Element.classList.add("fast-food-3")
    const newFastFood3 = new FastFoodItem2(newFastFood3Element, 1, "down")
    gameBoardElement.appendChild(newFastFood3Element)
    fastFoodArray.push(newFastFood3)
}

// Launching the FastFood to DITTO in the GAMEBOARD
function moveFastFood() {
    fastFoodArray.forEach((ditto) => {
        if (directionXFastFood1 === "right") {
            ditto.positionX -= ditto.speed;
            if (ditto.positionX >= gameBoardWidth - ditto.element.clientWidth) {
                directionXFastFood1 = "left";
                fastFoodPassed++
            }
        } else if (directionXFastFood1 === "left") {
            ditto.positionX += speedFastFood1;
            if (ditto.positionX <= 0) {
                ditto.element.remove()
            }
        }
        ditto.element.style.right = `${ditto.positionX}px`
    })

}


// Creating the Game Animation Frame
let animationId;
let frames = 0
function gameAnimationFrame() {
    if (!this.gameIsOver) {
        moveFastFood();
        dittoIsEating();
        frames = frames +2
        animationId = requestAnimationFrame(gameAnimationFrame);
        if (frames % 80 === 0) {
            createFastFood1()
        }
        else if (frames % 130 === 0) {
            createFastFood2()
        }
        else if (frames % 100 === 0) {
            createFastFood3()
        }
    }
}
gameAnimationFrame();

