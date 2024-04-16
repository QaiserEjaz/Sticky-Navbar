const navbarE1 = document.querySelector(".navbar");

const bottomContainerE1 = document.querySelector(".bottom-container")

// console.log(navbarE1.offsetHeight); to find the height but it may vary to the size of browser's zoom...
// console.log(window.scrollY ); 
// console.log(bottomContainerE1.offsetTop);

window.addEventListener("scroll", () => {
    if(window.scrollY>bottomContainerE1.offsetTop - navbarE1.offsetHeight - 50){
        navbarE1.classList.add("active")
    }else{
        navbarE1.classList.remove("active")
    }
    
})

/* window.scrollY => scroll size of the whole window in y-axis*/
/* bottomContainerE1.offsetTop => top of the next page container */
/* navbarE1.offsetHeight => the height of our navbar it may vary */
