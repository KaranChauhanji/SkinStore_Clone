const main_img=document.getElementById(`main_img`)
const prev=document.getElementById(`prev`)
const next=document.getElementById(`next`)

let arr=[`images/original-Page-116[1]-070206.webp`,`images/original-Page-007-035233.webp`];

let currentIndex=0;


prev.addEventListener(`click`,()=>{

    if(currentIndex===0){
        currentIndex=arr.length-1
    }
    else{
        currentIndex--
    }
    main_img.src=arr[currentIndex]

});


next.addEventListener(`click`,()=>{
    if(currentIndex===arr.length-1){
        currentIndex=0
    }
    else{
        currentIndex++
    }
    main_img.src=arr[currentIndex]
})

setInterval(()=>{
    if(currentIndex===arr.length-1){
        currentIndex=0
    }
    else{
        currentIndex++
    }
    main_img.src=arr[currentIndex]
},4000)