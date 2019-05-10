export const preloader = function () {

  // $(window).on("load", function () {
  //   $(".loader-inner").fadeOut();
  //   $(".loader").fadeOut("slow");
  // });

  window.onload = function () {
    
    const preloader = document.querySelector('.loader');

    // setTimeout(function() {
      preloader.style.display = 'none';
    // }, 5000);
    
  };

};