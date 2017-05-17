/* Hiding initial Pictures to prevent jumping on pageload */
if (screen.width > 768) {
  $('#roamText2, #roamText3').hide();
	$('#roamDesktopPic2, #roamDesktopPic3').hide();
	$('#relaxText2, #relaxText3').hide();
	$('#relaxDesktopPic2, #relaxDesktopPic3').hide();
	$('#rageText2, #rageText3').hide();
	$('#rageDesktopPic2, #rageDesktopPic3').hide();
	$('#randomText2, #randomText3').hide();
	$('#randomDesktopPic2, #randomDesktopPic3').hide();
}

/* Doc Ready on Page Load */
$(document).ready(function() {
if (screen.width > 768) {

/* CLICK HANDLERS*/
	$('#roamTitle1').click(roam1);
	$('#roamTitle2').click(roam2);
	$('#roamTitle3').click(roam3);
	$('#relaxTitle1').click(relax1);
	$('#relaxTitle2').click(relax2);
	$('#relaxTitle3').click(relax3);
	$('#rageTitle1').click(rage1);
  $('#rageTitle2').click(rage2);
  $('#rageTitle3').click(rage3);
	$('#randomTitle1').click(random1);
	$('#randomTitle2').click(random2);
	$('#randomTitle3').click(random3);

/* ROAM JQUERY*/
  function roamReset() {
    $('#roamText1, #roamText2, #roamText3').slideUp();
    $('#roamDesktopPic1, #roamDesktopPic2, #roamDesktopPic3').hide();
  }
  function roam1() {
    roamReset();
    $('#roamText1').slideDown();
    $('#roamDesktopPic1').fadeIn(900);
  }
  function roam2() {
    roamReset();
    $('#roamText2').slideDown();
    $('#roamDesktopPic2').fadeIn(900);
  }
  function roam3() {
    roamReset();
    $('#roamText3').slideDown();
    $('#roamDesktopPic3').fadeIn(900);
  }
  
/* RELAX JQUERY*/
  function relaxReset() {
    $('#relaxText1, #relaxText2, #relaxText3').slideUp();
    $('#relaxDesktopPic1, #relaxDesktopPic2, #relaxDesktopPic3').hide();
  }	
  function relax1() {
    relaxReset();
    $('#relaxText1').slideDown();
    $('#relaxDesktopPic1').fadeIn(900);
  }
  function relax2() {
    relaxReset();
    $('#relaxText2').slideDown();
    $('#relaxDesktopPic2').fadeIn(900);
  }
  function relax3() {
    relaxReset();
    $('#relaxText3').slideDown();
    $('#relaxDesktopPic3').fadeIn(900);
  }

/* RAGE JQUERY*/
  function rageReset() {
    $('#rageText1, #rageText2, #rageText3').slideUp();
    $('#rageDesktopPic1, #rageDesktopPic2, #rageDesktopPic3').hide();
  }	
  function rage1() {
    rageReset();
    $('#rageText1').slideDown();
    $('#rageDesktopPic1').fadeIn(900);
  }
  function rage2() {
    rageReset();
    $('#rageText2').slideDown();
    $('#rageDesktopPic2').fadeIn(900);
  }
  function rage3() {
    rageReset();
    $('#rageText3').slideDown();
    $('#rageDesktopPic3').fadeIn(900);
  }

/* JQUERY FOR SECTION NAMED RANDOM */
  function randomReset() {
    $('#randomText1, #randomText2, #randomText3').slideUp();
    $('#randomDesktopPic1, #randomDesktopPic2, #randomDesktopPic3').hide();
  }	
  function random1() {
    randomReset();
    $('#randomText1').slideDown();
    $('#randomDesktopPic1').fadeIn(900);
  }
  function random2() {
    randomReset();
    $('#randomText2').slideDown();
    $('#randomDesktopPic2').fadeIn(900);
  }
  function random3() {
    randomReset();
    $('#randomText3').slideDown();
    $('#randomDesktopPic3').fadeIn(900);
  }
}
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