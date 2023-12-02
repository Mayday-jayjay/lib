
let navLink = document.querySelectorAll('.nav-link');
let menuBar = document.querySelector('.menu-btn');
let sideBar = document.querySelector('.sidebar');


// 主頁面
// 主頁面
iframe.contentWindow.postMessage('Hello from main window!', '*');


// let switchMode = document.querySelector('#switch-mode');
let switchMode = document.getElementById("switch-mode");
const body = document.querySelector('body'); 

// left nav - nav
navLink.forEach(item =>{
    // parentElement 如果父節點不是元素節點，則返回 null：
    let li = item.parentElement;
    item.addEventListener("click",()=>{
        navLink.forEach((link)=>{
            link.parentElement.classList.remove("active");
        })    
        li.classList.add("active");
    })
})

// right context - menu-btn
menuBar.addEventListener('click',()=>{
    sideBar.classList.toggle("hide");
})

// switchMode change color
switchMode.addEventListener("change",(e)=>{
    if(e.target.checked){
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
    }
})

// search
let searchFrom = document.querySelector(".content nav form");
let searchBtn = document.querySelector(".search-btn") ;
let searchIcon = document.querySelector(".search-icon");

searchBtn.addEventListener("click",(e)=>{
    if(window.innerWidth < 576){
        e.preventDefault();
        searchFrom.classList.toggle("show");
        if(searchFrom.classList.contains("show")){
            searchIcon.classList.replace("fa-search","fa-times")
        }else{
            searchIcon.classList.replace("fa-times","fa-search")

        }
    }
})

// show login-btn
// const showPopuBtn = document.querySelector(".login-btn");
// showPopuBtn.addEventListener("click",()=>{
//     document.body.classList.toggle("show-popup")
// })




// 
window.addEventListener("resize",()=>{
    if(window.innerWidth > 576){
        searchIcon.classList.replace("fa-times","fa-search");
        searchIcon.classList.remove("show");
    }
    if(window.innerWidth < 768){
        sideBar.classList.add("hide");
    }else{
        sideBar.classList.remove("hide");
    }
})
// if(window.innerWidth > 768){
//     sideBar.classList.add("hide");
// }


