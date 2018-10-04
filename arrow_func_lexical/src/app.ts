class MyClass {
  constructor(private name: string) {}
  myMethod() {
    const foo = 123;
    console.log("1", this);
    //setTimeout witch in fact is window.setTimeout bind this to call site... window witch is pretty logical
    setTimeout(function() {
      console.log(foo);
      console.log("2", this);
    }, 0);
    //arrow function don't rebind the this value to the window object
    //in fact it probably rebind the this value of the arrow function by declaring it and make a xxx.bind to the instance of the object invoking it
    setTimeout(() => {
        console.log("3", this);
      }, 0);

    //doing it manually
    const callback = function (){
        console.log('4', this);
    }

    console.log("UNBINDED CALLBACK")
    setTimeout(callback, 100);
    
    //bind to the object instance
    console.log("BINDED CALLBACK")
    const bindedCallback = callback.bind(this)
    setTimeout(bindedCallback,100);
    
  }
}

const instance = new MyClass("toto");
instance.myMethod();

// const instanceB = new MyClass("titi");
// instance.myMethod();
