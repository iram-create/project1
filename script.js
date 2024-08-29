const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

      xprev = dets.clientX;
      yprev = dets.clientY;
      circleMouseFollower(xscale, yscale);

      timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }




function firstPageDuration(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger :.2,

    })
    .from("#herofooter",{
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        delay:-1
    })
    function circleMouseFollower(xscale, yscale) {
        window.addEventListener("mousemove", function (dets) {
          document.querySelector(
            "#minicircle"
          ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
        });
      }
}
var csr=document.querySelector("#minicircle")

    main.addEventListener("mousemove",function(dets){
     csr.style.left=dets.x+"px"
      csr.style.top=dets.y+"px"
      

    })
    firstPageDuration();
   circleChaptaKaro();
   circleMouseFollower();
   


