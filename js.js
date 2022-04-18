const main = document.getElementById("content")

/* add new player */
const player = document.createElement("div")
player.classList.add("move")
main.appendChild(player)

/* move */
let count_top = 100  
let count_left = 100  

/* document.addEventListener('touchstart', (e)=>{
    ;[...e.changedTouches].forEach(touch =>{
        count_left = e.pageX
        document.querySelector(".move").style.left = count_left + "px"
        count_top = e.pageY
        document.querySelector(".move").style.top = count_top + "px"
    })
    console.log(e.pageX)
}) */

/* mobile */
document.addEventListener('touchmove', (e)=>{
    ;[...e.changedTouches].forEach(touch =>{
        color()
        count_left = touch.pageX
        document.querySelector(".move").style.left = count_left + "px"
        count_top = touch.pageY -50
        document.querySelector(".move").style.top = count_top + "px"
    })
})

/* mouse */
window.addEventListener('mousemove', (e)=>{
    color()
    count_left = e.clientX
    document.querySelector(".move").style.left = count_left + "px"
    count_top = e.clientY
    document.querySelector(".move").style.top = count_top + "px"
})

/* key */
window.addEventListener('keydown',(e)=>{
    const key = e.key
    if(key==="a" || key==="A"){
        count_left -= 10
        if(count_left>0){
            document.querySelector(".move").style.left = count_left + "px"
        }
        color()
    }
    if(key==="d" || key==="D"){
        count_left += 10
        if(count_left>0){
            document.querySelector(".move").style.left = count_left + "px"
        }
        color()
    }
    if(key==="s" || key==="S"){
        count_top += 10
        if(count_top>0){
            document.querySelector(".move").style.top = count_top + "px"
        }
        color()
    }
    if(key==="w" || key==="W"){
        count_top -= 10
        if(count_top>0){
            document.querySelector(".move").style.top = count_top + "px"
        }
        color()
    }
})

function color() {
    document.querySelector(".move").style.background = "rgb("+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+")"
}