
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