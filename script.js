let burgerClicked = false;

aside = document.querySelector("aside");

document.querySelector("#burger").addEventListener('click', ()=>{
    burgerClicked = !burgerClicked;
    console.log(burgerClicked);
    aside.style.transition = "0.2s ease-in-out";
    setTimeout(()=>{
        aside.style.transition = "0s";
    },200);

    if(burgerClicked){
        aside.style.transform = "translateX(0)";
    }else{
        aside.style.transform = "translateX(250px)";
    }
})


let mobile = false;

window.onresize = ()=>{
    if(window.innerWidth>800){

        aside.style.transform = "translateX(0)";
        if(burgerClicked) burgerClicked = false;

    }else{
        if(!burgerClicked) aside.style.transform = "translateX(250px)";
    }
};