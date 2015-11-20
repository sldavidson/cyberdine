var ev3dev = require('ev3dev');
var left = new ev3dev.Motor('outB');
var right = new ev3dev.Motor('outC');


function move (direction, time) {
  var leftDC = 0;
  var rightDC = 0;

  switch (direction) {
    case 'right':
      leftDC = 100;
      rightDC = -100;
      break;
    case 'left':
      leftDC = -100;
      rightDC = 100;
      break;
    default:
      leftDC = rightDC = 100;
  }

  right.rampUpSp = 100;
  right.rampDownSp = 100;
  right.timeSp = time;
  right.dutyCycleSp = rightDC;

  left.rampUpSp = 100;
  left.rampDownSp = 100;
  left.timeSp = time;
  left.dutyCycleSp = leftDC;

  right.command = 'run-timed';
  left.command = 'run-timed';
}


move('forward', 3000);
move('right', 700);
move('forward', 6000);
move('left', 800);
move('forward', 3000);