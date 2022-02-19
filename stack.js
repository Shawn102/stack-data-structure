//Stack Data Structure
/*
Before creating stack, we need to know what is stack?

=> Stack is linear data structure, which follows the "LIFO" rules, 
means Last In, First Out.
You have to think it like, you have 12 plate, and you put it one by one above the first one,
so which one you entered first, it'll be in the bottom, that's why, if you want to remove 1 plate 
you have to remove from top, that's reason of it's rules known as "LIFO"
*/


//Now , I'm going to create 
//Stack using "class" data type

class myStack {
    constructor() {
        //this empty array will hold the stack data
        this.store = []; 
        //this will calculate the size of the array everytime, when you 'adding' or 'removing' something from the stack
        this.count = 0; 
    }
    //this method will adds an element at the end of the stack
    push(element) {
        this.store[this.count] = element;
        this.count++;
    }
    //this method will check if the stack is empty or not 
    isEmpty() {
        return this.count === 0;
    }
    //this method will removes element from the top of the stack
    pop() {
        //first checking the stack is not empty, then removing elements
        if(this.isEmpty() === false) {
            this.count = this.count-1;
            return this.store.pop();
        }
    }
    //this method will peek the top element from the stack
    //Between "peek" and "pop", only difference is "pop" will remove the last top element, but "peek" never remove,it just show the top element
    peek() {
        return this.store[this.count-1];
    }
    //this method will returns the size of the stack
    size() {
        return this.count;
    }
}

//create a variable to check your stack methods
const mySta = new myStack();
//adding value to the stack
mySta.push("Shawn");
mySta.push("Revu");
mySta.push(`Shawn's parents- "Gias Uddin" and "Johora Aktat"`);
mySta.push("Shawn's friend.");
//checking the stack
console.log(mySta);
//checking the "pop" method
console.log(mySta.pop());
//checking the "peek" method
console.log(mySta.peek());
//checking the "size" method 
console.log(mySta.size());




{
    //this time also, I'm going to create "stack" data structure
    //but now, I'll use "function" data type
    
    function funStack() {
        this.storage = {};
        this.length = 0;
        //this method will adds an element at the end of the stack
        this.push = function(element) {
            this.storage[this.length] = element;
            this.length++; 
        }
        //this method will removes element from the top of the stack
        this.pop = function() {
            //firstly, checking if the stack is empty or not!
            //if empty then return 'undefined'
            if(this.length === 0) {
                return undefined;
            } else {
                //decrement the length
                this.length--;
                let result = this.storage[this.length];
                delete this.storage[this.length];
                return result;
            }
        }
        //this method will peek the top element from the stack
        this.peek = function() {
            return this.storage[this.length-1];
        }
        //this method will returns the size of the stack
        this.size = function() {
            return this.length;
        }
    }
    //create a variable to check your stack methods
const myFunStack = new funStack();
//adding value to the stack
myFunStack.push("Shawn");
myFunStack.push("Revu");
myFunStack.push(`Shawn's parents- "Gias Uddin" and "Johora Aktat"`);
myFunStack.push("Shawn's friend.");
//checking the stack
console.log(myFunStack);
//checking the "pop" method
console.log(myFunStack.pop());
//checking the "peek" method
console.log(myFunStack.peek());
//checking the "size" method 
console.log(myFunStack.size());
}


