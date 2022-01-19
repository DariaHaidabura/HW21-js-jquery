// console.log('--------5')
$('.test').css('background-color', 'red');
$('h2.test').css('background-color', 'red');
$('li + li').css('background-color', 'red');
$('li + li.www').css('background-color', 'red');
$('h2 i').css('background-color', 'red');
$('h2 > i').css('background-color', 'red');
// console.log('--------6')
$('h2:not(.test)').css('background-color', 'red');
$(':header:not(.test)').css('background-color', 'red');
$(':header + :header').css('background-color', 'red');
$(':header.test + :header.test').css('background-color', 'red');