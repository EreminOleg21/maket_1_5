let slider = document.querySelector('.swiper');

let mySwiper;

  
  function mobileSlider(){
    if (window.innerWidth <= 767 && slider.dataset.mobile === 'false'){
      mySwiper = new Swiper(slider, {
    
        spaceBetween: 16,
        slidesPerView: 'auto', 
     
    
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    
        breakpoints: {
          320: {
            slidesPerView: 1.25        
          },
          480: {
            slidesPerView: 2.1
          },
          660: {
            slidesPerView: 3.1
          },
        }       
      });
      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth >= 767){
      slider.dataset.mobile = 'false';    
      if ( slider.classList.contains('swiper-initialized')) { 
        mySwiper.destroy();
      }
      
    }
  }

  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
    })
    
    
    let img = document.querySelector('.btn__open-img');
    let swiperW = document.querySelector('.swiper-wrapper');    
    let btn = document.querySelector('.btn__open');

    btn.addEventListener('click', function(evt){ 
      evt.preventDefault();
      if (swiperW.classList.contains('over')){

        swiperW.classList.remove('over');
        document.querySelector('.text').textContent="Показать все";
        img.classList.remove('arrows_rotate');
        img.classList.add('arrows_revers');      
      
      }else{

      swiperW.classList.add('over');
      document.querySelector('.text').textContent="Скрыть";
      img.classList.add('arrows_rotate');
      img.classList.remove('arrows_revers');
      }
    })


    
  



  