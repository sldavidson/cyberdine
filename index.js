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
var eyesSensor = new ev3dev.Sensor('in4');
var lightSensor = new ev3dev.Sensor('in3');

if (!eyesSensor.connected) {
  console.log("No eyesSensor could be found. Are you sure that one is connected?");
}
if (!lightSensor.connected) {
  console.log("No lightSensor could be found. Are you sure that one is connected?");
}

console.log(' Port: ' + eyesSensor.portName);
console.log(' Driver: ' + eyesSensor.driverName);
console.log(' Port: ' + lightSensor.portName);
console.log(' Driver: ' + lightSensor.driverName);

  console.log(' Unit ' + i + ': ' + eyesSensor.units);
  console.log(' Unit ' + i + ': ' + lightSensor.units);

console.log('Reading all eyesSensor values...');
for (var i = 0; i < eyesSensor.numValues; i++) {
  console.log(' Value ' + i + ': ' + eyesSensor.getValue(i) + ', ' + eyesSensor.getFloatValue(i));
}
for (var i = 0; i < lightSensor.numValues; i++) {
  console.log(' Value ' + i + ': ' + lightSensor.getValue(i) + ', ' + lightSensor.getFloatValue(i));
}
console.log('--------------------')
console.log("Core motor and eyesSensor test complete");