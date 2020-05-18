// FEEDBACK

// PHONE MASK
$(document).ready(function() {
   $("#phone").mask("+7 (999) 999-99-99");
});

// TOOLTIP
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// SIDEBAR
$('.triger').click(function(){
   $(this).toggleClass("click");
   $('.sidebar').toggleClass("show");
});
    $('.feat-btn').click(function(){
        $('nav ul .feat-show').toggleClass("show");
        $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
        $('nav ul .serv-show').toggleClass("show1");
         $('nav ul .second').toggleClass("rotate");
    });
    $('.help-btn').click(function(){
        $('nav ul .help-show').toggleClass("show2");
         $('nav ul .third').toggleClass("rotate");
    });
    $('nav ul li ').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
