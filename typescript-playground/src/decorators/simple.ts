function f() {
  console.log("f(): evaluated");
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("f(): called");
  };
}

function g() {
  console.log("g(): evaluated");
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("g(): called");
  };
}

console.log("creating C class");
class C {
  @f()
  @g()
  method() {}
}
console.log("running C.method");
new C().method();
