const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('#left')
const nav = document.getElementById('navbar')
const del = document.querySelector('.delete')



hamburger.addEventListener('click', ()=>{
    navbar.style.marginLeft ="0"
    hamburger.style.display="none"
    del.style.display="inline"
    
})

hamburger.addEventListener('click', ()=>{
    nav.style.marginLeft ="0"
    
})

del.addEventListener('click', ()=>{
    navbar.style.marginLeft ="-100%"
    hamburger.style.display="inline"
    del.style.display="none"
    del.style.transform= "rotate(360deg)"
    
    
})

del.addEventListener('click', ()=>{
    nav.style.marginLeft ="-100%"
    
})