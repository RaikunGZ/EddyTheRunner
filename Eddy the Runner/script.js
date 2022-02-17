// Movement
const turnTop = (value)=>{
    document.getElementById("top").turn = value;
    console.log("up")
    document.getElementById("player").style.backgroundImage = "url('./images/charback.png')";
}
const turnDown = (value)=>{
    document.getElementById("down").turn = value;
    document.getElementById("player").style.backgroundImage = "url('./images/charfront.png')";
}
const turnLeft = (value)=>{
    document.getElementById("left").turn = value;
    document.getElementById("player").style.backgroundImage = "url('./images/charleft.png')";
}
const turnRight = (value)=>{
    document.getElementById("right").turn = value;
    document.getElementById("player").style.backgroundImage = "url('./images/charright.png')";
}
const walkForward = (value)=>{
    document.getElementById("walk").input = value;
}

let turn = "";
let input = "g";
console.log(turn, input)

const stop = "Das funktioniert so nicht!";


// Basic Settings
const eddy = {
    posX: 0,
    posY: 0,
    watch: "b",
}

const field = {
    minX: -10,
    minY: -10,
    maxX: 10,
    maxY: 10,
}


// Input -> Movement
if(input === "g" && eddy.watch === "b"){
    if(eddy.posY-1 < field.minY){
        console.log(stop)
    }else{
        eddy.posY -= 1;
    }
}else if(input === "g" && eddy.watch === "t"){
    if(eddy.posY+1 > field.maxY){
        console.log(stop)
    }else{
    eddy.posY += 1;
    }
}else if(input === "g" && eddy.watch === "l"){
    if(eddy.posX-1 < field.minX){
        console.log(stop)
    }else{
    eddy.posX -= 1;
    }
}else if(input === "g" && eddy.watch === "r"){
    if(eddy.posX+1 > field.maxX){
        console.log(stop)
    }else{
    eddy.posY += 1;
    }
}else if(turn === "d"){
    eddy.watch = "r";
    console.log("Ich schaue nach rechts")
}else if(turn === "a"){
    eddy.watch = "l";
    console.log("Ich schaue nach links")
}else if(turn === "w"){
    eddy.watch = "t";
    console.log("Ich schaue nach oben")
}else if(turn === "s"){
    eddy.watch = "b";
    console.log("Ich schaue nach unten")
}

// Output coords
console.log(eddy.posX, eddy.posY)


// PROBLEMS AND IDEAS
// gehen = translate oder position oder so
// Random Spawn Enemies
// Weapon -> Sword
