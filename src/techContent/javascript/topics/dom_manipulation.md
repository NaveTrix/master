# JavaScript DOM Manipulation

## Key Concepts
- DOM (Document Object Model) represents the structure of web pages.
- JavaScript can access and modify DOM elements, attributes, and content.
- Common methods: `getElementById`, `querySelector`, `innerHTML`, `addEventListener`.

## Real-World Examples

### Example 1: Changing Text Content
```javascript
document.getElementById('demo').textContent = 'Hello, DOM!';
```

### Example 2: Creating and Appending Elements
```javascript
let p = document.createElement('p');
p.textContent = 'New paragraph';
document.body.appendChild(p);
```

### Example 3: Modifying Attributes
```javascript
document.querySelector('img').setAttribute('alt', 'Description');
```

### Example 4: Removing Elements
```javascript
let el = document.getElementById('removeMe');
el.parentNode.removeChild(el);
```

## Interview Questions & Answers

**Q1: How do you select an element by class name?**
A: Use `document.getElementsByClassName('className')` or `document.querySelector('.className')`.

**Q2: Real-time: How do you add a click event to a button?**
A: Use `addEventListener`:
```javascript
document.getElementById('btn').addEventListener('click', function() {
  alert('Button clicked!');
});
```

**Q3: What is the difference between `innerHTML` and `textContent`?**
A: `innerHTML` parses HTML tags; `textContent` sets or gets only the text.

## References
- [MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript.info: DOM](https://javascript.info/dom-nodes)
