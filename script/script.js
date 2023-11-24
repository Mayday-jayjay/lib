
let navLink = document.querySelectorAll('.nav-link');
let menuBar = document.querySelector('.menu-btn');
let sideBar = document.querySelector('.sidebar');

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

// switchMode
switchMode.addEventListener("change",(e)=>{
    if(e.target.checked){
        document.body.classList.add("dark");
        console.log("cc")
    }else{
        document.body.classList.remove("dark");
        console.log("bb");
    }
})

window.addEventListener("resize",()=>{
    if(window.innerWidth < 768){
        sideBar.classList.add("hide");
    }else{
        sideBar.classList.remove("hide");
    }
})
// if(window.innerWidth > 768){
//     sideBar.classList.add("hide");
// }



