// Burger-menu function

function activateMenu(){
    var button = document.getElementById('menu-btn')
    var nav = document.getElementById('menu-nav')
    var blur = document.getElementById('blur')
    if (button.className == 'menu-btn active'){
      button.className ='menu-btn'
      nav.className = 'menu-nav'
      blur.setAttribute('style', 'z-index: -100')
    }else{
      button.className ='menu-btn active'
      button.setAttribute('style', 'z-index: 11;')
      nav.className = 'menu-nav active'
      nav.setAttribute('style', 'z-index: 10;')
      blur.setAttribute('style', 'z-index: 5;')
      blur.setAttribute('style', 'background-color: rgba(0, 0, 0, .6);')
    }
    
}