$(document).foundation()

/*
Do NOT Touch Above
*/

var canvas = document.getElementById("canvas");
var beam = document.getElementById("beam");
var person = document.getElementById("person");
var last_known_scroll_position = 0;
var ticking = false;
var timeElapsed=0;

window.addEventListener("load", init, true);

function init()
{
  generateRandomBeams();
  setInterval(moveBeams,50);
  window.addEventListener('mousewheel', function(e)
  {
    last_known_scroll_position += e.wheelDelta||e.detail;

    if (!ticking)
    {

      window.requestAnimationFrame(function()
      {
        timeElapsed+=last_known_scroll_position/150;
        ticking = false;
      });
       
      ticking = true;

    }
  });
}


// random beam gen, initializes starting position of beams
function generateRandomBeams() {
  var $spans = $(".logo");

  $spans.each(function(){
    var _this = $(this);

    _this.fadeOut(0, function() {
      var maxLeft = $(window).width() - _this.width();
      var maxTop = $(window).height() - _this.height();
      var leftPos = Math.floor(Math.random() * (maxLeft + 10))
      var topPos = Math.floor(Math.random() * (maxTop + 10))

      _this.css({ left: leftPos, top: topPos }).fadeIn(0);
      console.log(leftPos,topPos);
    });
  });
};

//moves beams at an interval, set in init() function
function moveBeams(){
  
  timeElapsed+=10;

  var $spans = $(".logo");

  $spans.each(function()
  {
    var _this = $(this);


    _this.css('top', timeElapsed+'px');
    if (_this.position().top>$(window).height())
    {
      timeElapsed=0;
      generateRandomBeams();  //reset their starting positions
    }

    console.log("time elapsed: " + timeElapsed,
                "current top pos " + _this.position().top );

  });

}


