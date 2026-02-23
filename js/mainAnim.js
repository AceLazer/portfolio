
// marque code


// intro

let tl = gsap.timeline();

tl.from("#intro img",{
    
    x: -300,
    delay:0.4,
    duration:1,
    opacity:0,
   scrollTrigger:{
    trigger: '#intro',
    start: 'top 50%',
    end: 'top 10%',
    markers: true,
    scrub: true
    
   } 



})
tl.from("#intro h2",{
    x: 200,
    duration:1,
    opacity:0,
   scrollTrigger:{
   trigger: '#intro',
    start: 'top 50%',
    end: 'top 20%',
    
    scrub: true
   } 



})
tl.from("#intro p",{
    y: 200,
    duration:1,
    opacity:0,
   scrollTrigger:{
   trigger: '#intro',
    start: 'top 50%',
    end: 'top 30%',
    
    scrub: true
   } 



})