//true 로 취급하지 않는 데이터
//1
if (1) {
  console.log("1 isTrue");
}
if (0) {
  console.log("0 isTrue");
}
if ("") {
  console.log('"" isTrue');
}
if (undefined) {
  console.log("undefined isTrue");
}
if (NaN) {
  console.log("NaN isTrue");
}
