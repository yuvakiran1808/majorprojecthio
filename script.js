$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      navText: ['<img src="./images/nav-left.svg">','<img src="./images/nav-right.svg">'],
      responsive:{
      0:{
        items: 1
       },
     480:{
        items: 1
        },
     768:{
        items: 1
        },
     900:{
        items: 3
        }
    }
    });
  })