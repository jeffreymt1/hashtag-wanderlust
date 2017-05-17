$(document).ready(function() {

/* 4Rs Bar */
  $('.r4').mouseenter(function() {
    $(this).find('.rollOff').hide();
    $(this).find('.rollOn').show();
 
 if ($(this).attr('id') === 'roam') {
    $(this).css('backgroundImage','URL("images/roamnav.jpg")').css('backgroundSize','cover');
 } if
    ($(this).attr('id') === 'relax') {
    $(this).css('backgroundImage','URL("images/relaxnav.jpg")').css('backgroundSize','cover');
 } if
    ($(this).attr('id') === 'rage') {
    $(this).css('backgroundImage','URL("images/ragenav.jpg")').css('backgroundSize','cover');
 } if
    ($(this).attr('id') === 'random') {
    $(this).css('backgroundImage','URL("images/random.jpg")').css('backgroundSize','cover');
 }
  });
  $('.r4').mouseleave(function() {
      $(this).find('.rollOff').show();
      $(this).find('.rollOn').hide();
      $(this).css('backgroundImage', 'none');
  });

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
 if (screen.width < 769) {
  $('#locationUL').hide();
} else {
  $('#locationUL').show();
}
  $('#hamburger').click(show);
  function show() {
    //console.log('got to click')
    event.preventDefault();
    if (screen.width < 769) {
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