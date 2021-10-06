import randomDiv from "./random";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mailer from "./mailer";
gsap.registerPlugin(ScrollTrigger);



const vanillaAnimationController = () => {

    // LOADER LOGIC
    window.addEventListener("DOMContentLoaded", () => {

        document.querySelector(".loader").style.height = 0;
        document.querySelector("*").style.overflow = "auto";
        document.querySelector("*").style["overflow-x"] = "hidden";
        document.querySelector(".discover").classList = "discover"
        gsapAnimations();


    });

    // CIRCLE BG ANIMATION
    randomDiv();
    
    // HOME BASIC ANIMATIONS
    if(document.querySelector(".discover")){

        document.querySelector(".discover").addEventListener("click", () => {

            
            document.getElementById('home-nav').scrollIntoView();

        })
    }

    // ABOUT ANIMATIONS

    if(document.querySelector(".dot-circle")){

        document.querySelector(".dot-circle").addEventListener("mouseover", (e)=> {

            document.querySelector(".dot-circle").style.width = "130px";
            document.querySelector(".dot-circle").style.height = "130px";

            document.querySelector(".outer-circle").style.width = "120px";
            document.querySelector(".outer-circle").style.height = "120px";
            document.querySelector(".outer-circle").style.margin = "-61px 0px 0px -61px"

       })

       document.querySelector(".dot-circle").addEventListener("mouseleave", (e)=> {

        document.querySelector(".dot-circle").style.width = "150px";
        document.querySelector(".dot-circle").style.height = "150px";

        document.querySelector(".outer-circle").style.width = "110px";
        document.querySelector(".outer-circle").style.height = "110px";
        document.querySelector(".outer-circle").style.margin = "-57px 0px 0px -57px"

   })

    }
}

vanillaAnimationController()



const gsapAnimations = () => {

    
        
        const tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: ".nav-list",
              start: "center bottom",
            },
          });
        
        
        tl1.fromTo(".hero", {opacity: 0, y:100}, {opacity: 1, y:0, duration: .6})
        .fromTo(".follow-up-1", {opacity: 0,}, {opacity: 1, duration: .6},  "-=0.2")
        .fromTo(".follow-up-2", {opacity: 0}, {opacity: 1, duration: .6}, "-=0.4")
        .fromTo(".n1", {opacity: 0,y: 100}, {opacity: 1,y: 0, duration: .5}, "-=0.5")
        .fromTo(".n2", {opacity: 0,y: 100}, {opacity: 1,y: 0, duration: .5},"-=0.25")
        .fromTo(".n3", {opacity: 0,y: 100}, {opacity: 1,y: 0, duration: .5},"-=0.25")
}



mailer();