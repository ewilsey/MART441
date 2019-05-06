$(document).ready(function() {
  $('.back').on('click', function(){
    var backImg = $('img.active').prev('.slide-in img');
    if(backImg.length == 0) {
      backImg = $('.slide-in img:last');
    }
    $('img.active').removeClass('active');
    backImg.addClass('active');
  });
  $('.next').on('click', function() {
    var nextImg = $('img.active').next('.slide-in img');
    if(nextImg.length == 0) {
      nextImg = $('.slide-in img:first');
    }
    $('img.active').removeClass('active');
    nextImg.addClass('active');
  });
});﻿
