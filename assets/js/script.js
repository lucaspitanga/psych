window.addEventListener('scroll', underlineShow);
underlineShow();

window.addEventListener('scroll', onScroll);
onScroll();

function underlineShow() {
    showUnderlineAnimation();
}

function showUnderlineAnimation(){
  let underlineNode1 = document.querySelector('#underlineMain');
  let underlineNode2 = document.querySelector('#underlinePsi');
  let underlineNode3 = document.querySelector('#underlineTerapia');
  let underlineNode4 = document.querySelector('#underlineSobre');
  let underlineNode5 = document.querySelector('#underlineLocal');

 

    if(scrollY > 450){
      underlineNode1.classList.add("underline");
        } if(scrollY > 860){
          underlineNode2.classList.add("underline", "underline-o");
            } if(scrollY > 1800){
              underlineNode3.classList.add("underline");
                } if(scrollY > 2800){
                  underlineNode4.classList.add("underline");
                    } if(scrollY > 3000){
                      underlineNode5.classList.add("underline");
                        } 
}

function onScroll() {
    showBackToTopButtonOnScroll();
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 400){
        backToTopButton.classList.add('show')
        }else {
            backToTopButton.classList.remove('show')
        }
}

function openMenu() {
    let menuMobile = document.querySelector('#menu-aberto');
  
     {
      if (menuMobile.classList.contains('d-none')) {
        menuMobile.classList.remove('d-none');
        document.querySelector("body").classList.add("overflow_hidden");
        document.querySelector("html").classList.add("overflow_hidden"); 
      } else {
        menuMobile.classList.add('d-none');
        document.querySelector("body").classList.remove("overflow_hidden");
        document.querySelector("html").classList.remove("overflow_hidden");
      }
    
    }
  }

  function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  scrollY: 550,
  distance: '100px',
  duration: 4000,
}).reveal(' .container');