function ctof(cel) {
  var ctemp = cel;
  var ctofar = (ctemp * 9) / 5 + 32;
  var msg = ctemp + " " + ctofar;
  console.log(msg);
}
function ftoc(far) {
  var ftemp = far;
  var fartocel = ((ftemp - 32) * 5) / 9;
  var msg = ftemp + " " + fartocel;
  console.log(msg);
}
ctof(60);
ftoc(45);
