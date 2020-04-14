$(document).ready(function(){
  $('#car').carousel({interval:1000});
  $('#btn1').click(function(){
    if($('#btn1').children('span').hasClass('fa-pause')){
      $('#car').carousel('pause');
      $('#btn1').children('span').removeClass('fa-pause')
      $('#btn1').removeClass('btn-danger')
      $('#btn1').children('span').addClass('fa-play')
      $('#btn1').addClass('btn-success')
    }
    else if($('#btn1').children('span').hasClass('fa-play')){
      $('#car').carousel('cycle');
      $('#btn1').children('span').removeClass('fa-play')
      $('#btn1').removeClass('btn-success')
      $('#btn1').children('span').addClass('fa-pause')
      $('#btn1').addClass('btn-danger')
    }
  });
  // $("#btn2").click(function(){$("#car").carousel('cycle');});
  $("#mod1call").click(function(){
    $('#mod1').modal('show');
  });
  $("#mod2call").click(function(){
    $('#mod2').modal('show');
  });

});
