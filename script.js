const reset_btn = document.querySelector(".reset")
const size_inprEl = document.querySelector(".size_ipr")
let rows = size_inprEl.value
const size_inpcEl = document.querySelector(".size_ipc")
let cols = size_inpcEl.value
const color_inp = document.querySelector(".color_ip")
const container = document.querySelector(".container")
console.log(rows,cols);
let shut= false;
function draw(rows,cols){
    container.style.setProperty("--sizeofgridr",rows)
    container.style.setProperty("--sizeofgridc",cols)
    for(let i=0; i < rows * cols ; i++)
    {
        const div = document.createElement('div')
        div.classList.add('pixel')
        container.appendChild(div)

        div.addEventListener("mouseover",function(){

            if(!shut)
            return

            div.style.setProperty("background-color", color_inp.value)
        })

        div.addEventListener("mousedown",function(){

            div.style.setProperty("background-color", color_inp.value)
        })
    }
}

window.addEventListener("mousedown", function(){
    shut =true;
})
window.addEventListener("mouseup", function(){
    shut = false;
})

function resetfn(){
    container.innerHTML = " ";
    draw(rows,cols)
}

reset_btn.addEventListener("click", resetfn)

size_inprEl.addEventListener("keyup", function(){
    rows = size_inprEl.value;
    resetfn()
})


size_inpcEl.addEventListener("keyup", function(){
    cols = size_inpcEl.value;
    resetfn()
})

draw(rows,cols);

