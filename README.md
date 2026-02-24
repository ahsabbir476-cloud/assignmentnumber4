1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 

- by using getElementById you can only pass One element and it should be an unique Id. 
- getElememtsByClassName using this syntax you can select all the same elements that share the same class. 
- Using querySelector you can pass any CSS3 selector, such as id, tag, or even class.
- querySelectorAll : Returns all elements that match a CSS selector.
You sent


2. How do you create and insert a new element into the DOM?

// atfirst create an element :
const newDiv = document.createElement("div");

// add content to that element :
newDiv.textContent = "New Element Content";

// select the parent
const container = document.querySelector(".container");

// last insert :
container.append(newDiv);


3. What is Event Bubbling? And how does it work?

Event Bubbling is a mechanism in DOM where a event start from the target element, and then propagates upward through its parent element in DOM tree, for example: 

document.getElementById("child").addEventListener("click", function () {
  console.log("Button clicked");
});


4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element and use event bubbling to handle events, example : 

document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
}); 

It is useful cause you can just write few event listener, also it works dynamically. Make a clear and manageable code.


5. What is the difference between preventDefault() and stopPropagation() methods?


Main difference between them is preventDefault()  stops the browser’s default action, while
stopPropagation()  stops the event from moving to parent elements.