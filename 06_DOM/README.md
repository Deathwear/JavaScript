# 📘 JavaScript DOM Manipulation Cheat Sheet

A quick reference guide for DOM (Document Object Model) manipulation using plain JavaScript.

---

## 📍 Selecting Elements

### By ID

```javascript
const element = document.getElementById("myId");
````

### By Class Name

```javascript
const elements = document.getElementsByClassName("myClass");
```

### By Tag Name

```javascript
const elements = document.getElementsByTagName("div");
```

### By CSS Selector

```javascript
const element = document.querySelector(".myClass");     // First match
const elements = document.querySelectorAll("div.box");  // All matches (NodeList)
```

---

## ✏️ Changing Content

### Inner Text

```javascript
element.textContent = "New text";
```

### Inner HTML

```javascript
element.innerHTML = "<strong>Bold text</strong>";
```

### Input Value

```javascript
const inputValue = inputElement.value;
inputElement.value = "New value";
```

---

## 🎨 Changing Styles

### Inline Styles

```javascript
element.style.color = "blue";
element.style.backgroundColor = "#f0f0f0";
```

### Add/Remove Class

```javascript
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark-mode");
element.classList.contains("highlight"); // returns true/false
```

---

## 🧩 Attributes

```javascript
element.getAttribute("href");
element.setAttribute("src", "image.png");
element.removeAttribute("alt");
```

---

## 🛠️ Creating and Inserting Elements

### Create Elements

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
```

### Append / Prepend

```javascript
parent.appendChild(newDiv);
parent.prepend(newDiv);
```

### Insert Before

```javascript
parent.insertBefore(newElement, referenceElement);
```

---

## ❌ Removing Elements

```javascript
element.remove();
```

Or using parent:

```javascript
element.parentNode.removeChild(element);
```

---

## 🔁 Traversing the DOM

```javascript
element.parentNode;
element.children;
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;
```

---

## ⚡ Event Handling

### Add Event Listener

```javascript
element.addEventListener("click", () => {
  console.log("Element clicked!");
});
```

### Remove Event Listener

```javascript
function handleClick() {
  console.log("Clicked!");
}
element.removeEventListener("click", handleClick);
```

---

## ✨ Useful Tips

- Always wait for the DOM to load:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // safe to manipulate DOM here
});
```

- Use `event.target` to reference the clicked/triggering element.

---

## 🧹 Best Practices

- Avoid inline JavaScript in HTML.
- Use `classList` over manipulating `className` directly.
- Cache selectors for performance.
- Avoid using `.innerHTML` with user input (security risk).
