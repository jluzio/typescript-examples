const Foo = class {
  static greetStatic() {
    console.log("hello!");
  }
  greetInstance() {
    console.log("hello!");
  }
};

const foo = new Foo();
foo.greetInstance();
console.log(Object.getOwnPropertyNames(Foo.prototype));
console.log(Object.getOwnPropertySymbols(Foo.prototype));
console.log(Object.keys(Foo.prototype));
console.log(Object.getOwnPropertyNames(Foo));
console.log(Object.getOwnPropertySymbols(Foo));
console.log(Object.keys(Foo));
