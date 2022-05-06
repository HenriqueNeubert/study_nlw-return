function onScroll(){
      if(scrollY > 0){ /* if(scrollY !== 0){*/
            navigation.classList.add('scroll')
      }else{
            navigation.classList.remove('scroll')
      }
}

function openMenu() {
      document.body.classList.add('menu-expanded')
}

function closeMenu() {
      document.body.classList.remove('menu-expanded')
}

ScrollReveal({
      origin: 'bottom',
      distance: '70px',
      duration: 2000
}).reveal(
      `
      home, 
      #home img, 
      #home .stats,
      #services,
      #services header,
      #services .card,
      #about,
      #about header,
      #about .content
      `
);
