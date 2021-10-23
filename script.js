hamburger = document.querySelector(".hamburger");
menuAs = document.querySelectorAll("nav ul li  a");
nav = document.querySelector("nav");
hamburger.addEventListener('click' , ()=>showElement(nav,"visable"));
// menuAs[0].style.backgroundColor = "red";
menuAs.forEach(menuA => {
    // menuA.styles.backgroundColor='red';
    let ul = menuA.parentElement.querySelector("ul");
    menuA.addEventListener('click', () => showElement(ul , "visable"))
});

showElement = (element,className) => {
    console.log(element);
    if(element.classList.contains(className)){
        element.classList.remove(className)
        console.log("unvisable");
    }
    else{
        console.log("visable");
        element.classList.add(className);
    }
}