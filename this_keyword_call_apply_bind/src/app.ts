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

function myFunction(...text:string[]) {
    console.log('Function :::',this)
    console.log(text)
}

//call swicth the context. this have the value of the first arguement
myFunction('ABC','DEF');
myFunction.call(myObj,'ABC','DEF');
myFunction.call([]);

//call vs apply
//it's a matter of prefrence for each case
console.log("CALL VS APPLY")
myFunction.call(myObj,'ABC','DEF');
myFunction.apply(myObj,['ABC','DEF']);


//binding this
console.log("BIND")
const bindFunction = myFunction.bind(myObj);
bindFunction('message1','message2');
