
getRandcol = () =>{
    let letters = "0123456789ABCDEF"
    let color = "#"
    for(let i =0; i<0;i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

change = () =>{
    
    document.querySelector('.b1').style.backgruond = getRandcol()
    document.querySelector('.b2').style.backgruond = getRandcol()
    document.querySelector('.b3').style.backgruond = getRandcol()
    document.querySelector('.b4').style.backgruond = getRandcol()
    document.querySelector('.b5').style.backgruond = getRandcol()
    document.querySelector('.b6').style.backgruond = getRandcol()
    document.querySelector('.b7').style.backgruond = getRandcol()
    document.querySelector('.b8').style.backgruond = getRandcol()
    
}