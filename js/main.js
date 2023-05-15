'use-strict';
// SPグローバルメニュー
jQuery('.btn-menu').click(function () {
  jQuery(this).toggleClass('active');
  jQuery(".header-bar").toggleClass('active')
  jQuery(".globalmenu-sp").toggleClass('active')
  jQuery("body").toggleClass('active')
})





// テキストを下からふわっと表示
// (function($){
//   function txtFadeAnime(){
//     $('.txtFadeUp').each(function(){
//       const elemPos = $(this).offset().top - 50; 
//       const scroll = $(window).scrollTop();
//       const windowHeight = $(window).height();
//       if(scroll >= elemPos - windowHeight){
//         $(this).addClass('-visible');
//       }else{
//         $(this).removeClass('-visible')
//       };
//     });
//   };
//   $(window).scroll(function(){
//     txtFadeAnime();
//   });
  
// })(jQuery);
