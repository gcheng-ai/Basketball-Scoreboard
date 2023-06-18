let homedis = document.getElementById("home-display")
let guestdis = document.getElementById("guest-display")
// let hadd1 = document.getElementById("homeadd1")
// let hadd2 = document.getElementById("homeadd2")
// let hadd3 = document.getElementById("homeadd3")
let count = 0
let guestCount = 0


function add1(){
    count += 1
    homedis.textContent = count
}

function add2(){
    count += 2
    homedis.textContent = count
}

function add3(){
    count += 3
    homedis.textContent = count
    
}

function homezero(){
    count = 0
    homedis.textContent = 0
}

function guestAdd1(){
    guestCount += 1
    guestdis.textContent = guestCount
}

function guestAdd2(){
    guestCount += 2
    guestdis.textContent = guestCount
}

function guestAdd3(){
    guestCount += 3
    guestdis.textContent = guestCount
    
}

function guestZero(){
    guestCount = 0
    guestdis.textContent = 0
}

function newGame(){
    guestCount = 0
    count = 0
    guestdis.textContent = 0
    homedis.textContent = 0
}

