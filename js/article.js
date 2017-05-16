/* Hiding initial Pictures to prevent jumping on pageload */
	$('#roamText2, #roamText3').hide();
	$('#roamPic2, #roamPic3').hide();
	$('#relaxText2, #relaxText3').hide();
	$('#relaxPic2, #relaxPic3').hide();
	$('#rageText2, #rageText3').hide();
	$('#ragePic2, #ragePic3').hide();
	$('#randomText2, #randomText3').hide();
	$('#randomPic2, #randomPic3').hide();

/* Doc Ready on Page Load */
$(document).ready(function() {
  
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
    $('#roamPic1, #roamPic2, #roamPic3').hide();
  }
  function roam1() {
    roamReset();
    $('#roamText1').slideDown();
    $('#roamPic1').fadeIn(900);
  }
  function roam2() {
    roamReset();
    $('#roamText2').slideDown();
    $('#roamPic2').fadeIn(900);
  }
  function roam3() {
    roamReset();
    $('#roamText3').slideDown();
    $('#roamPic3').fadeIn(900);
  }
  
/* RELAX JQUERY*/
  function relaxReset() {
    $('#relaxText1, #relaxText2, #relaxText3').slideUp();
    $('#relaxPic1, #relaxPic2, #relaxPic3').hide();
  }	
  function relax1() {
    relaxReset();
    $('#relaxText1').slideDown();
    $('#relaxPic1').fadeIn(900);
  }
  function relax2() {
    relaxReset();
    $('#relaxText2').slideDown();
    $('#relaxPic2').fadeIn(900);
  }
  function relax3() {
    relaxReset();
    $('#relaxText3').slideDown();
    $('#relaxPic3').fadeIn(900);
  }

/* RAGE JQUERY*/
  function rageReset() {
    $('#rageText1, #rageText2, #rageText3').slideUp();
    $('#ragePic1, #ragePic2, #ragePic3').hide();
  }	
  function rage1() {
    rageReset();
    $('#rageText1').slideDown();
    $('#ragePic1').fadeIn(900);
  }
  function rage2() {
    rageReset();
    $('#rageText2').slideDown();
    $('#ragePic2').fadeIn(900);
  }
  function rage3() {
    rageReset();
    $('#rageText3').slideDown();
    $('#ragePic3').fadeIn(900);
  }

/* RANDOM JQUERY*/
  function randomReset() {
    $('#randomText1, #randomText2, #randomText3').slideUp();
    $('#randomPic1, #randomPic2, #randomPic3').hide();
  }	
  function random1() {
    randomReset();
    $('#randomText1').slideDown();
    $('#randomPic1').fadeIn(900);
  }
  function random2() {
    randomReset();
    $('#randomText2').slideDown();
    $('#randomPic2').fadeIn(900);
  }
  function random3() {
    randomReset();
    $('#randomText3').slideDown();
    $('#randomPic3').fadeIn(900);
  }
});
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