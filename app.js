const boxes=document.querySelectorAll('.box')
const selectBox=[]
setTimeout(function (){
    for (const i of boxes) {
        i.classList.add('hidden')
    }
},1000)
for (const i of boxes) {
    i.addEventListener('click',function (event){
        if(selectBox.length===0){
            event.target.classList.remove('hidden')
            selectBox.push(event.target)
        }else{
            event.target.classList.remove('hidden')
            selectBox.push(event.target)
            if(selectBox[0].innerHTML===selectBox[1].innerHTML){
                selectBox[0].classList.add('freez')
                selectBox[1].classList.add('freez')
                selectBox.length=0
            }else{
                freezAll()
                setTimeout(function (){
                    selectBox[0].classList.add('hidden')
                    selectBox[1].classList.add('hidden')
                    selectBox.length=0
                    unfreezAll()
                },1000)
            }
        }
    })
}
function freezAll(){
    for (const i of boxes) {
        i.classList.add('freez')
    }
}
function unfreezAll(){
    for (const i of boxes) {
        i.classList.remove('freez')
    }
}