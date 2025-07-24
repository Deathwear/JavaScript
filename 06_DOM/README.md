# 📜 JavaScript DOM Manipulation Cheatsheet

A quick-reference guide for DOM manipulation using vanilla JavaScript—perfect for hands-on learners, mini-project creators, and web dev explorers.

---

## 🧭 Selecting Elements

- `document.getElementById('id')` – Select by ID
- `document.querySelector('selector')` – Select first match by CSS selector
- `document.querySelectorAll('selector')` – Select all matching elements
- `document.getElementsByClassName('class')` – Select by class name
- `document.getElementsByTagName('tag')` – Select by tag name

---

## 🛠️ Creating & Modifying Elements

- `document.createElement('div')` – Create a new element
- `element.appendChild(child)` – Append child
- `element.remove()` – Remove the element
- `element.innerText = 'Text'` – Set visible text
- `element.innerHTML = '<b>HTML</b>'` – Set HTML content
- `element.textContent` – Get all text content

---

## 🎨 Styling & Attributes

- `element.style.property = 'value'` – Inline styling
- `element.classList.add('class')` – Add class
- `element.classList.remove('class')` – Remove class
- `element.classList.toggle('class')` – Toggle class
- `element.setAttribute('attr', 'value')` – Set attribute
- `element.getAttribute('attr')` – Get attribute

---

## 🎯 Event Handling

Add interactivity using DOM events:

```javascript
button.addEventListener('click', () => {
  alert('Button clicked!');
});