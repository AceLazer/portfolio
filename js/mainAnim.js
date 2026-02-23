
// marque code

window.addEventListener("wheel", function(dets){

    if(dets.deltaY>0){
        // console.log("Normal scrolling")
      gsap.to(".marque",{
        transform:'translateX(-200%)',
        duration: 4,
        repeat: -1,
        ease:"none"
      })
    }else{
// console.log("Reverse scrolling")
gsap.to(".marque",{
        transform:'translateX(0%)',
        duration: 4,
        repeat: -1,
        ease:"none"
      })
    }
})

// intro

let tl = gsap.timeline();

tl.from("#intro img",{
    
    x: -300,
    delay:0.4,
    duration:1,
    opacity:0,
   scrollTrigger:{
    trigger: '#intro',
    start: "top top",
    
   } 



})
tl.from("#intro h2",{
    x: 300,
    duration:1,
    opacity:0,
   scrollTrigger:{
    trigger: '#intro',
    start: "top top",
    
   } 



})
tl.from("#intro p",{
    y: 300,
    duration:1,
    opacity:0,
   scrollTrigger:{
    trigger: '#intro',
    start: "top top",
   
   } 



})