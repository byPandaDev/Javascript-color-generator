const hexBtn = document.getElementById('hex')
const rgbBtn = document.getElementById('rgb')
const generateBtn = document.getElementById('generate')

const body = document.querySelector('body')

const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

generateBtn.addEventListener('click', generateColor)

function generateColor() {
    
    // generate HEX-code
    let hex = '#'

    for(i=0;i<6;i++){
        const index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index]
    }

    hexBtn.textContent = hex
    body.style.backgroundColor = hex

    // generate RGB-code
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if(result) {
        var r= parseInt(result[1], 16);
        var g= parseInt(result[2], 16);
        var b= parseInt(result[3], 16);

        rgbBtn.textContent = "rgb(" +r+","+g+","+b +")" 
    }


}
// copy hexcode
hexBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const hex = hexBtn.innerText
    if(!hex) return
    textarea.value = hex
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("hex code copied to clipboard: " + hex)
})
// copy rgbcode
rgbBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const rgb = rgbBtn.innerText
    if(!rgb) return
    textarea.value = rgb
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("rgb code copied to clipboard: " + rgb)
})

/* 
Made by: PandaDev
Website: https://codewithpanda.com
Please Mention PandaDev if you use this Project
*/