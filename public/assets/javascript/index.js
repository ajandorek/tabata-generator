var arms = ['Bicep curls', 'Hammer curls', 'Shoulder press', 'Push ups', 'Tricep kick backs', 'Butterfly', 'Back row', 'Lateral raises', 'Front raises', 'Tricep extensions'];
var legs = ['Squats', 'Sumo squats', 'Deadlifts', 'Lunges', 'Wall sit', 'Single leg deadlifts', 'Side lunges', 'Side plank leg raise', 'Squat calf raises', 'Curtsey lunge', 'Calf raises'];
var butt = ['Donkey kicks', 'Glute bridges', 'Knee to elbow kickback', 'Clamshell', 'Single leg bridge', 'Side plank hip abduction', 'Lateral leg raise', 'Leg extension', 'Crossover'];
var abs = ['Bycicles', 'Russian twists', 'Alternating toe touches', 'Crunches', 'Knee tucks', 'Alternating leg drops', 'Scissors', 'Toe touches', 'Straight leg bycicles', 'Leg raises', 'Reverse crunches', 'Leg pull-in knee-up'];
var cardio = ['Burpees', 'Jumping jacks', 'Butt kicks', 'High knees', 'Squat jumps', 'Skaters', 'Mountain climbers', 'Plank jacks', 'Quick feet', 'Jump rope', 'Screamers',];


$( document ).ready(function() {
      console.log( "ready!" );
  function shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
  }

  shuffle(arms);
  shuffle(legs);
  shuffle(butt);
  shuffle(abs);
  shuffle(cardio);

  var armworkout = [], size = 4;
  var legworkout = [], size = 4;
  var buttworkout = [], size = 4;
  var abworkout = [], size = 4;
  var cardioworkout = [], size = 4;

  while (arms.length > 0)
      armworkout.push(arms.splice(0, size));

  while (legs.length > 0)
      legworkout.push(legs.splice(0, size));

  while (butt.length > 0)
      buttworkout.push(butt.splice(0, size));

  while (abs.length > 0)
      abworkout.push(abs.splice(0, size));

  while (cardio.length > 0)
      cardioworkout.push(cardio.splice(0, size));

  $.each(cardioworkout[0], (i, val) => {
    $('#tabata1').append('<li>' + val + '</li>');
  });
  $.each(armworkout[0], (i, val) => {
    $('#tabata2').append('<li>' + val + '</li>');
  });
  $.each(legworkout[0], (i, val) => {
    $('#tabata3').append('<li>' + val + '</li>');
  });
  $.each(buttworkout[0], (i, val) => {
    $('#tabata4').append('<li>' + val + '</li>');
  });
  $.each(cardioworkout[1], (i, val) => {
    $('#tabata5').append('<li>' + val + '</li>');
  });
  $.each(armworkout[1], (i, val) => {
    $('#tabata6').append('<li>' + val + '</li>');
  });
  $.each(legworkout[1], (i, val) => {
    $('#tabata7').append('<li>' + val + '</li>');
  });
  $.each(buttworkout[1], (i, val) => {
    $('#tabata8').append('<li>' + val + '</li>');
  });
  $.each(abworkout[0], (i, val) => {
    $('#tabata9').append('<li>' + val + '</li>');
  });
  $.each(abworkout[1], (i, val) => {
    $('#tabata10').append('<li>' + val + '</li>');
  });

});
