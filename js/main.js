$(document).ready(function() {

/* 4Rs Bar */
  $('#roam').mouseenter(roamOn);
  function roamOn() {
    event.preventDefault();
    $('#roam').css('backgroundImage','URL("images/roamnav.jpg")').css('backgroundSize','cover');
    }
  $('#relax').mouseenter(relaxOn);
  function relaxOn() {
    event.preventDefault();
    $('#relax').css('backgroundImage','URL("images/relaxnav.jpg")').css('backgroundSize','cover');
    }
  $('#rage').mouseenter(rageOn);
  function rageOn() {
    event.preventDefault();
    $('#rage').css('backgroundImage','URL("images/ragenav.jpg")').css('backgroundSize','cover');
    }
  $('#random').mouseenter(randomOn);
  function randomOn() {
    event.preventDefault();
    $('#random').css('backgroundImage','URL("images/random.jpg")').css('backgroundSize','cover');
    }
  $('#roam, #relax, #rage, #random').mouseleave(mouseOff);
  function mouseOff() {
    event.preventDefault();
    $(this).css('backgroundImage','none');
    }


  /* NAVIGATION BAR */

  $('#amalfiNav').mouseenter(comingSoonNavOn);
  function comingSoonNavOn() {
    event.preventDefault();
    $('#amalfiNav').html('');
    $('#amalfiNav').html('Coming Soon!');
    }
  $('#amalfiNav').mouseleave(comingSoonNavOff);
  function comingSoonNavOff() {
    event.preventDefault();
    $('#amalfiNav').html('');
    $('#amalfiNav').html('Amalfi');
    }

/* MOBILE HAMBURGER */
$(document).ready(function() {
  // hide topnav initially
 if (screen.width < 660) {
  $('#locationUL').hide();
} else {
  $('#locationUL').show();
}

  $('#hamburger').click(show);
  function show() {
    //console.log('got to click')
    event.preventDefault();
    if (screen.width < 660) {
  $('#locationUL').toggle();
} else {
  $('#locationUL').show();
}
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

});