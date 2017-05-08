$(document).ready(function() {

  $('#roam').mouseenter(roamOn);
  function roamOn() {
    event.preventDefault();
    $('#roam').css('backgroundColor','#00D4FF');
    }

  $('#relax').mouseenter(relaxOn);
  function relaxOn() {
    event.preventDefault();
    $('#relax').css('backgroundColor','#00D4FF');
    }

  $('#rage').mouseenter(rageOn);
  function rageOn() {
    event.preventDefault();
    $('#rage').css('backgroundColor','#00D4FF');
    }

  $('#random').mouseenter(randomOn);
  function randomOn() {
    event.preventDefault();
    $('#random').css('backgroundColor','#00D4FF');
    }


  $('.todo li').mouseleave(mouseOff);
  function mouseOff() {
    event.preventDefault();
    $(this).css('backgroundColor','grey');
    }

/* Animated Locations*/

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 900) {
          $('.bvi').add('html','TEST');
      }
  });

/* Coming Soon */
  $('#comingSoon').hide();
  $('.amalfi').mouseenter(comingSoonOn);
  function comingSoonOn() {
    event.preventDefault();
    $('#comingSoon').show();
    }
  $('.amalfi').mouseleave(comingSoonOff);
  function comingSoonOff() {
    event.preventDefault();
    $('#comingSoon').hide();
    }
/********** NEED TO FIX BELOW *********/
  $('#amalfiNav').mouseenter(amalfiWarning);
  function amalfiWarning() {
    event.preventDefault();
    $('#amalfiNav').removeAttr('li');
    $('#amalfiNav').addAttr('li','Coming Soon!');
    }

});