
let navLink = document.querySelectorAll('.nav-link');
let menuBar = document.querySelector('.menu-btn');
let sideBar = document.querySelector('.sidebar');
// 進館人數
const openURL = 'https://script.google.com/macros/s/AKfycbzENICgupl0gMiFPfiv8NXWLLkvCo2xqucyDeleJ4iwkgEoME0n10vnAg33AplkG616CA/exec';

// 進館人數
const form = document.forms['open']
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(openURL, { method: 'POST', body: new FormData(form)})
        .then(response => form.reset(), swal("資料已成功上傳", "試算表名稱：進館人數", "success"))
        .catch(error => swal("資料上傳失敗", "請確認表單名稱是否有誤？", "error"))
        // console.error('Error!', error.message)
    })






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


