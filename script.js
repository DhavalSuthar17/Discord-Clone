// creating the humburgur menu functionlities
const menubtn = document.querySelector("[data-menubtn]");
const closebtn = document.querySelector("[data-closebtn]");
const rightmenu = document.querySelector("#rightmenu");


//adding listner event to the menu btn and close btn 
menubtn.addEventListener("click" , () => {
rightmenu.style.right = "0";
rightmenu.style.transition = `all 0.5s ease-in`;
});

//close btn 
closebtn.addEventListener("click" , () => {
    rightmenu.style.right = `-100%`;
    rightmenu.style.transition = `all 0.5s ease-out`;
});


