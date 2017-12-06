$(document).foundation()

/*
Do NOT Touch Above
*/

var canvas = document.getElementById("canvas");
var beam = document.getElementById("beam");
var person = document.getElementById("person");

window.onscroll = function(){


  var y = window.pageYOffset;

    var q = 40;

    console.log(y);
    console.log(q);

    beam.style.top = 400 + y * .5 + "px";

 //  if (y > 2000) {
 //    counter.style.backgroundColor = "green";
 //  }else{
 //    counter.style.backgroundColor = "blue";}
 //
 //    icon.style.top = 200 + y  + "px";
 //
 //  if(y > 2000){
 //
 //      icon.src="https://2.bp.blogspot.com/-MTmoGMeE2cc/WSGIutFSHoI/AAAAAAAAK6o/Ya-tX6NvAqUM2LqV4VlxzsfwzD8xXEPFACLcB/s1600/254___thumbs-up-emoji.png";
 //
 //  }else{
 //
 //  icon.src="https://1.bp.blogspot.com/-jnt2C7f2HH8/WSGIun5uhGI/AAAAAAAAK6s/A1R4fUrtMUsQtEbKqopa2xTWqaEtxClogCLcB/s1600/256___come-to-fight-emoji.png";
 // }

};


// cloud experiment
// var canvas = document.getElementById("canvas");
// var clouds = document.getElementById("clouds");
// var y = window.pageYOffset;
//
//
//
// window.onscroll = function(){
//
//
//   var y = window.pageYOffset;
//
//   var q = 40;
//
//   console.log(y);
//   console.log(q);
//
//   cloud1.style.top = 400 + y * .5 + "px";
//
//
//
//   // cloud1.style.top = y;
//
// };

// random beam gen
function moveBeam() {
  var $spans = $(".logo");

  $spans.each(function(){
    var _this = $(this);

    _this.fadeOut(500, function() {
      var maxLeft = $(window).width() - _this.width();
      var maxTop = $(window).height() - _this.height();
      var leftPos = Math.floor(Math.random() * (maxLeft + 10))
      var topPos = Math.floor(Math.random() * (maxTop + 10))

      _this.css({ left: leftPos, top: topPos }).fadeIn(100);
      console.log(leftPos,topPos);
    });
  });
};

moveBeam();
// setInterval(moveBeam, 1000);


//attempts to place image using js
// var img1 = new Image();
// var imgBeam = document.getElementsByClassName('.logo');
// document.getElementsByClassName('.logo').height = "300";
//
// img1.onload = function() {
//   imgBeam.appendChild(img1);
// };
//
// img1.src = '../img/beam_scale.svg';

// function myFunction() {
//     var img1 = document.getElementsByClassName('logo');
//     img1.setAttribute("src", "../img/beam_scale.svg");
//     img1.setAttribute("height", "300");
//     document.getElementsByClassName('logo').appendChild(img1);
// }

// var img = new Image();
// var div = document.getElementById('logo');
//
// img.onload = function() {
//   div.appendChild(img);
// };
//
// img.src = 'beam_scale.svg';
