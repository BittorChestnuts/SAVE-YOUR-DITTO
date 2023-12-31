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

// init Ditto in the GAMEBOARD
let positionYDitto = 300;

let positionXDitto = 80;
let speedDitto = 40;
let dittoHealth = 10;
let fastFoodPassed = 0;
let chooseYourName = "Square"


//init the NAME, DITOHEALTH and SCORE
let dittoName = document.querySelector(".dittoName")
dittoName.textContent = `Name: ${chooseYourName}`
let dittoLife = document.querySelector(".dittoLife")
dittoLife.textContent = `Life: ${dittoHealth}`
let score = document.querySelector(".score")
score.textContent = `Score: ${fastFoodPassed}`

//init fastFoodArray , direction X and Y possible directions 
const fastFoodArray = []
let directionX = "left"
const possibleDirections = ["up", "down"]
function getRandomDirection() {
    const randomIndex = Math.floor(Math.random() * possibleDirections.length);
    return possibleDirections[randomIndex]
}

//getting info and init FastFood 1
const fastFood1 = document.querySelector(".fast-food-1");
let speedFastFood1 = 3;
let directionYFastFood1 = getRandomDirection()
console.log(directionYFastFood1);

//getting info and init FastFood 2
const fastFood2 = document.querySelector(".fast-food-2");
let speedFastFood2 = 3;
let directionYFastFood2 = getRandomDirection()


//getting info and init FastFood 3
const fastFood3 = document.querySelector(".fast-food-3");
let speedFastFood3 = 3;
let directionYFastFood3 = getRandomDirection()

//getting info and init FastFood 3
const objective = document.querySelector(".objective");
let speedObjective = 3;
let directionYObjective = getRandomDirection()

// create the FastFood1
function createFastFood1() {
    const newFastFood1Element = document.createElement("div");
    newFastFood1Element.classList.add("fast-food-1")
    const newFastFood1 = new FastFoodItem1(newFastFood1Element)
    gameBoardElement.appendChild(newFastFood1Element)
    fastFoodArray.push(newFastFood1)
}

// create the FastFood2
function createFastFood2() {
    const newFastFood2Element = document.createElement("div");
    newFastFood2Element.classList.add("fast-food-2")
    const newFastFood2 = new FastFoodItem2(newFastFood2Element)
    gameBoardElement.appendChild(newFastFood2Element)
    fastFoodArray.push(newFastFood2)
}

// create the FastFood3
function createFastFood3() {
    const newFastFood3Element = document.createElement("div");
    newFastFood3Element.classList.add("fast-food-3")
    const newFastFood3 = new FastFoodItem3(newFastFood3Element)
    gameBoardElement.appendChild(newFastFood3Element)
    fastFoodArray.push(newFastFood3)
}



// Launching the FastFood to DITTO in the GAMEBOARD
let frames = 0
function moveFastFood() {
    fastFoodArray.forEach((food, index) => {
        if (directionX === "left") {
            food.positionX += food.speed;

            //food.directionY = getRandomDirection()

            if (food.positionX >= gameBoardWidth - food.element.clientWidth) {
                food.element.remove()
                fastFoodArray.splice(index, 1)
                fastFoodPassed++
            }
        }
        if (food.directionY === "up") {
            food.positionY += 1
            //          food.positionY = getRandomDirection()
        }
        else {
            food.positionY -= food.speed - 2
        }

        if (frames % 140 === 0) {
            food.directionY = getRandomDirection()
        }


        food.element.style.right = `${food.positionX}px`
        food.element.style.top = `${food.positionY}px`


    })
}

function GameOver() {
    if (dittoHealth === 0) {
        const gameIsOver = document.createElement("div")
        gameIsOver.classList.add("gameOver")
        gameIsOver.textContent = "GAME OVER"
        document.body.appendChild(gameIsOver)
        cancelAnimationFrame(animationId)
    }
}


// Creating the Game Animation Frame
let animationId;
function gameAnimationFrame() {
    if (!this.gameIsOver) {
        moveFastFood();
        dittoIsEating();
        frames = frames + 1
        animationId = requestAnimationFrame(gameAnimationFrame);
        if (frames % 150 === 0) {
            createFastFood1()
        }
        else if (frames % 90 === 0) {
            createFastFood2()
        }
        else if (frames % 120 === 0) {
            createFastFood3()
        }
        
        GameOver()
    }
}
gameAnimationFrame();

