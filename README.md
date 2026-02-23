Answers to Questions 
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :
    getElementById()
    Selects only ONE element by its id.
    Returns a single element.
    getElementsByClassName()
    Selects elements by class name.
    Returns an HTMLCollection (multiple elements).
    querySelector()
    Selects the first matching element using CSS selector.
    querySelectorAll()
    Selects all matching elements using CSS selector.
    Returns a NodeList.

2. How do you create and insert a new element into the DOM?
Ans :
    Create element using document.createElement()
    Add content
    Insert into DOM using appendChild() or append()

3. What is Event Bubbling? And how does it work?
Ans :
    Event Bubbling means an event starts from the target element and bubbles up to its parent elements.
    First → button event runs
    Then → div event runs
    Then → body event runs
    It moves from child → parent.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans :
    Event Delegation means adding event listener to a parent element instead of multiple child elements.
    It works because of event bubbling.
    useful:
    Better performance
    Handles dynamically added elements
    Less code

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans :
    preventDefault()
    Stops the default behavior of an element.
    Example: Stop form submission or link redirect.
    stopPropagation()
    Stops event bubbling.
    Prevents event from going to parent elements.