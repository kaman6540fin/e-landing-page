$(document).ready(function(){

  //owl-carousel setting
  $(".owl-carousel").owlCarousel({
    center: true,
    items:1,
    margin:15,
    loop:true,
    autoWidth:true,
    dots:false,
  })

  // slider跟input雙向綁定func
  function sliderAndInput (sliderId,inputId){
    sliderId.on('input',function(){
      inputId.val(sliderId.val());
    })
    sliderId.on('change',function(){
      inputId.val(sliderId.val());
    })
    inputId.on('input',function(){
      sliderId.val(inputId.val());
    })
    inputId.on('change',function(){
      sliderId.val(inputId.val());
    })
  }

  // 執行slider跟input雙向綁定func
  sliderAndInput ( $('#money-slider'),$('#money'))
  sliderAndInput ( $('#reward-slider'),$('#reward'))
  sliderAndInput ( $('#year-slider'),$('#year'))

  //scrollTop偵測 

  

  // 
  

 $(window).on('scroll', function () {


  //監聽 元素是否進入視窗內，是return true，否則false
  function animateInView(element){
    let newScrollTop = $(this).scrollTop()
    const offsetTop = element.offset().top;
    const WindowHeight = $(this).height()
    if(offsetTop - newScrollTop < WindowHeight){
      return true
      // element.addClass('animate__animated animate__fadeInDown');
    }
    else{
      return false
    }
  }

  if(animateInView($('.part2 .title'))){
    $('.part2 .title').addClass('animate__animated animate__fadeInDown')
  }

  //滾動時fixed-btn往右移動
  if($(window).scrollTop()>0){
   $('.fixed-area').addClass('move-right')
  }
  else{
    $('.fixed-area').removeClass('move-right');;
  }
  


 })

 $('.go-top').click(function(){
  $('html,body').animate({scrollTop:0},300)
})

 console.log('有讀到我喔')
});