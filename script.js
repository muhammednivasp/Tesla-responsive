let closebtn=document.getElementById('close')
let menb=document.getElementById('menubtn')
let asid=document.querySelector('.asiclass')
let blurback=document.querySelector('.backblur')

menb.addEventListener("click",()=>{
   
    asid.classList.add('active')
    blurback.classList.add('active')

})
closebtn.addEventListener("click",()=>{
   
    asid.classList.remove('active')
    blurback.classList.remove('active')

})