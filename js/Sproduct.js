const increase=document.getElementById(`increase`);
const decrease=document.getElementById(`decrease`);
const count=document.getElementById(`num`)

increase.addEventListener(`click`,()=>{
let num=Number(count.textContent)
num+=1
count.textContent=num
})
decrease.addEventListener(`click`,()=>{
    let num=Number(count.textContent)
    num-=1
    if(num>=0){
        count.textContent=num
    }
    })