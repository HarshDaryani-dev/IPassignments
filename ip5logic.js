function temperature(num) {
  num = parseFloat(num);
  document.getElementById("far").innerHTML= (num*1.8)+32;
  document.getElementById("kel").innerHTML= num + 273.15;
}
function length(num) {
  num = parseFloat(num);
  document.getElementById("cm").innerHTML = num * 100;
  document.getElementById("km").innerHTML = num / 1000;
}
function weight(num) {
  num = parseFloat(num);
  document.getElementById("gm").innerHTML = num * 1000;
  document.getElementById("p").innerHTML = num * 2.2046;
}
function speed(num) {
  num = parseFloat(num);
  document.getElementById("ks").innerHTML = num / 1000;
  document.getElementById("kh").innerHTML = num * 18 / 5;
}


function temperature2(num) {
  num = parseFloat(num);
  document.getElementById("far2").innerHTML= (num-32) / 1.8;
  document.getElementById("kel2").innerHTML= ((num-32)/1.8)+273.15;
}
function length2(num) {
  num = parseFloat(num);
  document.getElementById("cm2").innerHTML = num / 100;
  document.getElementById("km2").innerHTML = num / 100000;
}
function weight2(num) {
  num = parseFloat(num);
  document.getElementById("gm2").innerHTML = num / 1000;
  document.getElementById("p2").innerHTML = num * 0.0022046;
}
function speed2(num) {
  num = parseFloat(num);
  document.getElementById("ks2").innerHTML = num * 1000;
  document.getElementById("kh2").innerHTML = num * 3600;
}



function temperature3(num) {
  num = parseFloat(num);
  document.getElementById("far3").innerHTML= ((num-273.15)*1.8)+32;
  document.getElementById("kel3").innerHTML= num - 273.15;
}
function length3(num) {
  num = parseFloat(num);
  document.getElementById("cm3").innerHTML = num * 100000;
  document.getElementById("km3").innerHTML = num * 1000;
}
function weight3(num) {
  num = parseFloat(num);
  document.getElementById("gm3").innerHTML = num / 0.0022046;
  document.getElementById("p3").innerHTML = num / 2.2046;
}
function speed3(num) {
  num = parseFloat(num);
  document.getElementById("ks3").innerHTML = num * 5 / 18;
  document.getElementById("kh3").innerHTML = num / 3600;
}
// var a = prompt("enter your choice 1. Temperature  2. Length  3. Weight  4. Speed")
// switch(a) {
// case 1:
// break;
// case 2:
// break;
// case 3:
// break;
// case 4:
// break;
// default:
// }
