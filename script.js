gsap.from("#nav", {
    y: 20,
    opacity: 0,
    duration: .5,
    delay: 5.5
})

gsap.from(".right", {
    x: 50,
    delay: 6.5,
    opacity: 0
})

gsap.from("#left #inner_line", {
    width: 0,
    duration: 1,
    delay: 6.5
})

gsap.from("#left .Left", {
    opacity: 0,
    x: -20,
    stagger: 0.3,
    delay: 6.5
})

gsap.from("#right img", {
    scale: 0,
    duration: 1,
    delay: 6.5
})

gsap.from("#contact", {
    y: 30,
    opacity: 0,
    stagger: 0.5,
    delay: 6.5
})

gsap.from("#main .bubble",{
    x: 30,
    opacity: 0,
    scale: 0,
    delay: 7
})

var menu = document.querySelector("#menu");
var bg = document.querySelector("#main");

var isTrue = false;

menu.addEventListener('click', function(){
    if (!isTrue){
        bg.style.transform = 'scale(.8)';
        bg.style.borderRadius = '10px';
        bg.style.boxShadow = '0 150px 45px -100px rgba (0, 0, 0, 0.2)';
        isTrue = true;
    }
    else{
        bg.style.transform = 'scale(1)';
        bg.style.borderRadius = '0';
        bg.style.boxShadow = 'none';
        isTrue = false;
    }
});

