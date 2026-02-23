
// hero
gsap.to("header h1", {
  transform:"translateX(-100%)",
   scrollTrigger:{
    trigger: 'header',
    scroller: "body",
    scrub:4,
  pin:true
    
    
   } 

})

//nav bar

gsap.from("nav a",{

   opacity:0,
   duration:5,
   ease: "expo.out",
   scrollTrigger:{
      trigger: '#intro',
    scroller: "body",
    
   }
   
})




// intro



gsap.from(".introw1 img",{
    
    x: -300,
    delay:0.4,
    duration:1,
    opacity:0,
   scrollTrigger:{
    trigger: '#intro',
    start: 'top 60%',
    end: 'top 30%',
    scroller: "body",
    
    
    
   } 



})
gsap.from("#introw1",{
    x: 200,
    delay:0.8,
    duration:1,
    opacity:0,
   scrollTrigger:{
   trigger: '#intro',
   scroller: "body",
   start: 'top 60%',
    end: 'top 30%',
    
   } 



})
gsap.from(".introw2",{
    x: -200,
    delay:0.5,
    duration:1,
    opacity:0,
   scrollTrigger:{
   trigger: '#row2',
   scroller: "body",
    start: 'top 60%',
    end: 'top 30%',
    
    
   } 



})