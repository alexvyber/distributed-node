function a() {
  b()
}

function b() {
  c()
}

function c() {
  /**/
  console.log("a call")
}

function x() {
  y()
}

function y() {
  z()
}

function z() {
  /**/
  console.log("x call")
}

setTimeout(x, 0)
a()
