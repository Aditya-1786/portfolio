$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });


  //typing animation
  const t1 = document.querySelector('.typing');
  const t2 = document.querySelector('.typing-2');
  const text=["Coder","Web Developer"];
  let i=0;
  let j = 0;
  let k =0;
  let l =0;
  type1();
  type2();
  function remove1(){
    if(j>=0){
        t1.innerHTML = t1.innerHTML.slice(0,j);
        j--;
        setTimeout(remove1,30);
    }
    else{
        j=0;
        type1();
    }
  }
  function type1(){
      if(j===0){
          if(i===0)i=1;
          else i=0;
      }
      if(j<text[i].length){
          t1.innerHTML+=text[i].charAt(j);
          j++;
          setTimeout(type1,30);
      }
      else{
          setTimeout(remove1,1000);
      }
  }
 
   function remove2() {
     if (k >= 0) {
       t2.innerHTML = t2.innerHTML.slice(0, k);
       k--;
       setTimeout(remove2, 30);
     } else {
       k = 0;
       type2();
     }
   }
   function type2() {
     if (k === 0) {
       if (l === 0) l = 1;
       else l = 0;
     }
     if (k < text[l].length) {
       t2.innerHTML += text[l].charAt(k);
       k++;
       setTimeout(type2, 30);
     } else {
       setTimeout(remove2, 1000);
     }
   }

});