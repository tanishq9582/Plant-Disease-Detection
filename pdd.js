function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
  
    // Each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // Tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // We don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things differently on mobile devices - it doesn't even transform the container at all!
      // So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile.
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
    });
  
    // Each time the window updates, refresh ScrollTrigger and update LocomotiveScroll
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // After everything is set up, refresh ScrollTrigger and update LocomotiveScroll
    ScrollTrigger.refresh();
  }
  locoScroll();
  
  // Cursor Effect
  function cursorEffect() {
    const page1Content = document.querySelector("#page1-content");
    const cursor = document.querySelector("#cursor");
  
    page1Content.addEventListener("mousemove", function (e) {
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
      });
    });
  
    page1Content.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });
  
    page1Content.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  }
  cursorEffect();
  
  // Page 2 Animation
  function page2Animation() {
    gsap.from(".ele h4", {
      y: 60,
      stagger: 0.5,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        scrub: 2,
      },
    });
  }
  page2Animation();
  
  // Page 2 Content Animation
  function page2ElementAnimation() {
    gsap.from("#page2-content h1", {
      opacity: 0,
      y: 80,
      duration: 2,
      scrollTrigger: {
        trigger: "#page2-content",
        scroller: "#main",
        scrub: 2,
      },
    });
  }
  page2ElementAnimation();
  
  // Page 3 Top Animation
//   function page3Animation1() {
//     gsap.from("#page3-top h4", {
//       opacity: 0,
//       y: -100,
//       duration: 1,
//       stagger: 0.9,
//       scrollTrigger: {
//         trigger: "#page3-top",
//         scroller: "#main",
//         scrub: 2,
//       },
//     });
//   }
//   page3Animation1();
  
//   // Page 3 Top Heading Animation
//   function page3Animation2() {
//     gsap.from("#page3-top h2", {
//       opacity: 0,
//       y: 100,
//       duration: 1,
//       stagger: 0.9,
//       scrollTrigger: {
//         trigger: "#page3-top",
//         scroller: "#main",
//         scrub: 2,
//       },
//     });
//   }
//   page3Animation2();
  
//   // Page 3 After Animation
//   function page3AfterAnimation() {
//     gsap.from("#page3top h4", {
//       opacity: 0,
//       y: 70,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#page3top",
//         scroller: "#main",
//         scrub: 2,
//       },
//     });
//   }
//   page3AfterAnimation();
  
//   // Page 3 Last Animation
//   function page3After1Animation() {
//     gsap.from("#page3last h1", {
//       opacity: 0,
//       y: 70,
//       duration: 0.5,
//       stagger: 1,
//       scrollTrigger: {
//         trigger: "#page3top",
//         scroller: "#main",
//         scrub: 2,
//       },
//     });
//   }
//   page3After1Animation();
  
  // Swiper Slider Initialization
  function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    });
  }
  sliderAnimation();
  
  // Loader Animation
  var tl = gsap.timeline();
  tl.from("#loader h3", {
    x: 40,
    duration: 1,
    opacity: 0,
    stagger: 0.1,
  });
  
  tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    duration: 1,
    stagger: 0.2,
  });
  
  tl.to("#loader", {
    opacity: 0,
  });
  
  tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
    delay: -0.1,
  });
  
  tl.to("#loader", {
    display: "none",
  });
  
  // Page 6 Animation
  function page6Animation() {
    gsap.from("#page6-content h4", {
      opacity: 0,
      y: 70,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        scrub: 5,
      },
    });
  }
  page6Animation();
  
  // Page 6 Heading Animation
  function page6Animation1() {
    gsap.from("#page6-content h2", {
      opacity: 0,
      y: 70,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        scrub: 5,
      },
    });
  }
  page6Animation1();
  
  // Page 7 Navigation Animation
  function page7Animation() {
    gsap.from("#page7-content nav", {
      opacity: 0,
      y: -70,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        scrub: 5,
      },
    });
  }
  page7Animation();
  
  // Page 7 Section Animation
  function page7Animation1() {
    gsap.from("#page7-content section", {
      opacity: 0,
      y: -40,
      duration: 0.3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        scrub: 5,
      },
    });
  }
  page7Animation1();
  
  // Page 7 Span Animation
  function page7Animation2() {
    gsap.from("#page7-content span", {
      opacity: 0,
      y: -100,
      duration: 0.9,
      stagger: 0.6,
      scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        scrub: 5,
      },
    });
  }
  page7Animation2();




  function animateLoader() {
    gsap.from("#loader h3", {
      opacity: 0,     
      y: -50,               
      duration: 2,   
      stagger: 0.5,     
      ease: "power2.out",   // Smooth easing function
    });
  }

//    
// document.addEventListener("DOMContentLoaded", function () {
//     const boxes = document.querySelectorAll(".box");

//     boxes.forEach(box => {
//         const img = box.querySelector(".thumbnail");
//         const video = box.querySelector(".video");

//         img.addEventListener("click", function () {
//             img.style.display = "none";  // Hide image
//             video.style.display = "block"; // Show video
//             video.play(); // Start playing video
//         });

//         video.addEventListener("click", function () {
//             if (!video.paused) {
//                 video.pause(); // Pause video if it's playing
//             }
//         });
//     });



function page3animation1(){
    gsap.from("#page3-top h4",{
      opacity:0,
      y:-100,
      duration:1,
      stagger:0.9,
      scrollTrigger:{
        trigger:"#page3-top",
        scroller:"#main",
        // start: "top 30%", 
        // end: "bottom 80%", 
        scrub: 2, 
        // markers:true,
      }
    });
  }
  page3animation1();
  
  function page3animation2(){
    gsap.from("#page3-top h2",{
      opacity:0,
      y:100,
      duration:1,
      stagger:0.9,
      scrollTrigger:{
        trigger:"#page3-top",
        scroller:"#main",
        // start: "top 30%", 
        // end: "bottom 80%", 
        scrub: 2, 
        // markers:true,
      }
    });
  }
  page3animation2();
  
  
  function page3afteranimation(){
    gsap.from("#page3top h4",{
      opacity:0,
      y:70,
      duration:2,
      
      scrollTrigger:{
        trigger:"#page3top",
        scroller:"#main",
        // start: "top 30%", 
        // end: "bottom 80%", 
        scrub: 2, 
        // markers:true,
      }
    });
  }
  page3afteranimation();
  
  function page3after1animation(){
  gsap.from("#page3last h1",{
    opacity:0,
    y:70,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
      trigger:"#page3top",
      scroller:"#main",
      // start: "top 30%", 
      // end: "bottom 80%", 
      scrub: 2, 
      // markers:true,
    }
  });
  }
  page3after1animation();

  function uploadImage() {
    let input = document.getElementById("imageUpload");
    let file = input.files[0];

    if (!file) {
        alert("Please upload an image first.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById("preview").src = event.target.result;
        document.getElementById("preview").style.display = "block";
    };
    reader.readAsDataURL(file);

    let formData = new FormData();
    formData.append("file", file);

    fetch("/predict", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = "Predicted Disease: " + data.disease;
    })
    .catch(error => console.error("Error:", error));
}
