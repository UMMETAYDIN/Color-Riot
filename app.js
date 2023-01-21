
document.querySelector("body").addEventListener("mousemove", (e) => {

    document.querySelector("body").style.backgroundColor = 
    `rgb(${e.screenX % 255}, ${e.screenY % 255}, ${e.screenX % 255 + e.screenY % 255})`

    document.querySelector(".container1").style.backgroundColor = 
    `rgb(${e.screenX % 220}, ${e.screenY % 220}, ${e.screenX % 220 + e.screenY % 220})`

    document.querySelector(".container2").style.backgroundColor = 
    `rgb(${e.screenX % 170}, ${e.screenY % 170}, ${e.screenX % 170 + e.screenY % 170})`

    document.querySelector(".container3").style.backgroundColor = 
    `rgb(${e.screenX % 170}, ${e.screenY % 170}, ${e.screenX % 170 + e.screenY % 170})`

    document.querySelector(".container4").style.backgroundColor = 
    `rgb(${e.screenX % 220}, ${e.screenY % 220}, ${e.screenX % 220 + e.screenY % 220})`
})

