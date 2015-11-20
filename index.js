var ev3dev = require('ev3dev');

// Run motor
console.log('Motor --------------');
// Pick the first connected motor
var leftMotor = new ev3dev.Motor('outB');
var rightMotor = new ev3dev.Motor('outC');

if (!rightMotor.connected){
  console.log("No right motor could be found. Are you sure that one is connected?");
}
if (!leftMotor.connected){
  console.log("No left motor could be found. Are you sure that one is connected?");
}

console.log(' Port: ' + rightMotor.portName);
console.log(' Driver: ' + rightMotor.driverName);
console.log(' Port: ' + leftMotor.portName);
console.log(' Driver: ' + leftMotor.driverName);

console.log('Setting motor properties...');
rightMotor.rampUpSp = 100;
rightMotor.rampDownSp = 100;
rightMotor.timeSp = 1000;
rightMotor.dutyCycleSp = 50;
leftMotor.rampUpSp = 100;
leftMotor.rampDownSp = 100;
leftMotor.timeSp = 1000;
leftMotor.dutyCycleSp = 50;
console.log('Available commands: ' + rightMotor.commands);
console.log('Sending motor command...');
rightMotor.command = 'run-timed';
leftMotor.command = 'run-timed';

do {
  console.log("Motor speed: " + rightMotor.speed);

  { //Hack to sleep for time
    //    SHOULD NOT BE USED IN PRODUCTION CODE
    var start = new Date().getTime();
    while (new Date().getTime() < start + 80) {;
    }
  }
} while (rightMotor.speed > 10 && leftMotor.speed > 10);

console.log('--------------------');

//Read sensor
console.log('Sensor -------------');
// Pick the first connected sensor
var sensor = new ev3dev.Sensor();

if (!sensor.connected) {
  console.log("No sensor could be found. Are you sure that one is connected?");
}

console.log(' Port: ' + sensor.portName);
console.log(' Driver: ' + sensor.driverName);

console.log('Reading all sensor values...');
for (var i = 0; i < sensor.numValues; i++) {
  console.log(' Value ' + i + ': ' + sensor.getValue(i) + ', ' + sensor.getFloatValue(i));
}
console.log('--------------------')
console.log("Core motor and sensor test complete");