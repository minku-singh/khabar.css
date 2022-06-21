let hamburger = document.querySelector(".hamburger");
let cross = document.querySelector(".cross");
let navList = document.querySelector("nav>ul.list");

hamburger.addEventListener("click", toggleList);
cross.addEventListener("click", toggleList);

function toggleList(){
    if(navList.hasAttribute("id","show-list")){
        navList.removeAttribute("id", "show-list");
        hamburger.removeAttribute("id", "hide-hamburger");
        cross.removeAttribute("id", "show-cross");
        console.log("toggled");
    }else{
        navList.setAttribute("id", "show-list");
        hamburger.setAttribute("id", "hide-hamburger");
        cross.setAttribute("id", "show-cross");
        console.log("tok=ggled");
    }
}
