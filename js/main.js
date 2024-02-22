const list_button = document.getElementById('list-button');

const imageObserverText = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.remove('animation__invisible'); 
            entry.target.classList.add('show-animation__left')
        }

        else {
            entry.target.classList.remove('show-animation__left'); 
            entry.target.classList.add('animation__invisible')
        }

      });
    }
  );



document
.querySelectorAll('.animation__invisible')
.forEach((block) => imageObserverText.observe(block));

const imageObserverImages = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.remove('animation__invisible__images'); 
            entry.target.classList.add('show-animation__appear')
        }

        else {
            entry.target.classList.remove('show-animation__appear'); 
            entry.target.classList.add('animation__invisible__images')
        }

      });
    }
  );



document
.querySelectorAll('.animation__invisible__images')
.forEach((block) => imageObserverImages.observe(block));

const imageObserverLines = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
          entry.target.classList.remove('line__animation'); 
      }

      else {
          entry.target.classList.add('line__animation'); 
      }

    });
  },
);



document
.querySelectorAll('.line__animation')
.forEach((block) => imageObserverLines.observe(block));

const imageObserverFiricon = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
          entry.target.classList.remove('firicon__animation'); 
      }

      else {
          entry.target.classList.add('firicon__animation'); 
      }

    });
  },
);



document
.querySelectorAll('.firicon')
.forEach((block) => imageObserverFiricon.observe(block));

list_button.onclick = function l_button() {
    if (document.getElementById('header-list').classList.contains('invisible') == false) {
      const li_invisible = document.getElementsByClassName('mobile-li');
      var count = 0, length = li_invisible.length;
      var interval = setInterval(function(){
        if(count == length - 1)
            clearInterval(interval);
  
            li_invisible[count++].classList.remove('mobile-header__li_invisible');
        }, 0)
  
        document.getElementById('header-list').classList.add('invisible');
        document.getElementById('blur').classList.add('invisible');
        list_button.innerHTML = ('☰');
        document.getElementById('list-button').classList.remove('cross');
  
    }
  
    else if (document.getElementById('header-list').classList.contains('invisible') == true) {
      document.getElementById('header-list').classList.remove('invisible');
      document.getElementById('blur').classList.remove('invisible');
      list_button.innerHTML = ('✕');
      document.getElementById('list-button').classList.add('cross');
  
      const li_invisible = document.getElementsByClassName('mobile-li');
      var count = 0, length = li_invisible.length;
      var interval = setInterval(function(){
        if(count == length - 1)
            clearInterval(interval);
  
            li_invisible[count++].classList.add('mobile-header__li_invisible');
        }, 200)
  
    }
  }

  window.onload = function start() {
    document.getElementById('preloader').classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.getElementById('preloader').classList.add('loaded');
    }, 900);

    let l = document.getElementsByClassName('underline').length;

    for (i = 0; i < l; i++){
        document.getElementsByClassName('underline')[i].onmouseover = function animation(i) {
            v = i.target;
            v.classList.add('animation-underline')
        }

        document.getElementsByClassName('underline')[i].onmouseout = function animation_out(i) {
            v = i.target;
            v.classList.remove('animation-underline')
        }

        document.getElementsByClassName('check-list-link')[0].onmouseover = function animation(i) {
          document.getElementsByClassName('check-list-link')[0].classList.add('check-list__animation');
          document.getElementsByClassName('check-list-link')[0].classList.add('arrow__hover');
        }

        document.getElementsByClassName('check-list-link')[0].onmouseout = function animation_out(i) {
          document.getElementsByClassName('check-list-link')[0].classList.remove('check-list__animation');
          document.getElementsByClassName('check-list-link')[0].classList.remove('arrow__hover');
        }

        document.getElementById('bcl').onmouseover = function() {
          document.getElementById('arrow').classList.add('arrow__invisible');
          document.getElementById('arrow__hover').classList.remove('arrow__invisible');
        }

        document.getElementById('bcl').onmouseout = function() {
          document.getElementById('arrow').classList.remove('arrow__invisible');
          document.getElementById('arrow__hover').classList.add('arrow__invisible');
        }
    }
    
    if (i >= l) {
        i = i - l;
    }

}
    
let cardblock = document.getElementsByClassName('background_animation')

let count = 0;

for (let count = 0; count >= 0 && count < cardblock.length; count++ ) {
  
  cardblock[count].addEventListener("mouseover", function getPosition(element) {
    let bounds = element.currentTarget.getBoundingClientRect();

    let radial_gradient = element.currentTarget.querySelector('#radial_gradient');

    radial_gradient.classList.remove('hidden');

    let sizeInfo = radial_gradient.getBoundingClientRect();

    let width = sizeInfo.width;
    let height = sizeInfo.height;

    let x = element.clientX - bounds.left - width / 2;
    let y = element.clientY - bounds.top - height / 2;
    
  
    radial_gradient.style.left = x + 'px';
    radial_gradient.style.top = y + 'px';

  });
  
  cardblock[count].addEventListener("mouseout", function disappear(element) {
    let radial_gradient = element.currentTarget.querySelector('#radial_gradient');
    radial_gradient.classList.add('hidden');
  });
}

if (count > cardblock.length) {
   count = 0;
} 

