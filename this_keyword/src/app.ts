function myFunction() {
    console.log('Function :::',this)
}
myFunction();

const myObj = {
    myMethod() {
        console.log('Object :::',this)
    }
}

myObj.myMethod();

class myClass {
    myMethod (){
        console.log('Class :::',this)
    }
}

const instance = new myClass();

instance.myMethod();
