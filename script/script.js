
let navLink = document.querySelectorAll('.nav-link');
let menuBar = document.querySelector('.menu-btn');
let sideBar = document.querySelector('.sidebar');


// test
// 獲取 iframe 元素
// 主頁面
var iframe = document.getElementById('myIframe');
iframe.contentWindow.postMessage('Hello from main window!', 'https://mayday-jayjay.github.io/lib/');

// 在主窗口中註冊一個事件監聽器來接收消息
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
  // 確保消息來自預期的 iframe
  if (event.source === iframe.contentWindow) {
    // 在這裡處理接收到的消息
    console.log('Received message from iframe:', event.data);
  }
}

// 發送消息給 iframe
function sendMessageToIframe() {
  var message = 'Hello from the main window!';
  // 向 iframe 發送消息
  iframe.contentWindow.postMessage(message, '*');
}

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


