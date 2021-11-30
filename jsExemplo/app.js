let soma  = 0
let somaEl = document.getElementById('soma')
const item = Array.from(document.querySelectorAll('.item'))
somaEl.innerHTML = soma

somaEl.addEventListener('click', showType)

function somar(){
    soma+=1
    somaEl.innerHTML = soma
}

function showType(event){
    console.log(event.target.innerHTML)
}

item.forEach(item => {
    item.addEventListener('click', shoeItem)
})

function shoeItem(event){
    alert(`Clicou em ${event.target.innerHTML}`)
}
