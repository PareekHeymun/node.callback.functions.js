# Node.js: Neatly Organized Library for Ready-to-Use Callback Functions

A modular Node.js library that provides reusable, well-structured callback functions for file operations and HTTP server routing. This project helps you avoid repetitive callback code and keeps your Node.js projects clean and maintainable.

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)]
---

## Features

- ✅ **Reusable Callbacks:** Import and use pre-defined callback functions for `fs.readFile`, `fs.writeFile`, `fs.appendFile`, and more.
- ✅ **Organized Workflow:** Clean separation of callback logic into a dedicated module.
- ✅ **Clear Console Logs:** Informative and consistent log messages for success and error cases.
- ✅ **Error Handling:** Robust error handling for file and server operations.
- ✅ **Easy Routing:** Simple HTTP server routing to serve static HTML files.
- ✅ **Automatic File Array:** Optionally auto-generate file arrays from a folder for dynamic routing.

---

## Getting Started

1. **Clone the repository**
2. **Install Node.js** (if not already installed)
3. **Structure your HTML files** in a folder (e.g., `html_files/`)
4. **Run the server:**
    ```bash
    node index.js
    ```

---

## Usage Example

```javascript
const fs = require('fs');
const http = require('http');
const cfns = require('./callback.functions.js');
const path = require('path');

const htmlFolder = './html_files';
const html_path_arr = fs.readdirSync(htmlFolder)
    .filter(file => file.endsWith('.html'))
    .map(file => path.join(htmlFolder, file));
const routes_arr = html_path_arr.map((file, i) => i === 0 ? '/' : `/${path.parse(file).name}`);

const server = http.createServer(cfns.defaulthttpServer(html_path_arr, routes_arr));
server.listen(3000, cfns.listener(3000));
```

---

## Why Use This Library?

- **Saves Time:** No need to rewrite common callback logic.
- **Reduces Errors:** Centralized error handling and logging.
- **Easy to Extend:** Add your own callbacks or extend existing ones.
- **Great for Learning:** Understand callback patterns and modular Node.js design.

---

## Contributing

Feel free to contribute! Suggestions, bug fixes, and new callback utilities are welcome. Help us make this library even more useful for the Node.js community.

---

## Roadmap / Tasks

- [ ] Handle the callback function for WebSockets.
- [ ] Add Promise/async versions for modern Node.js.
- [ ] Add more file operation utilities.
- [ ] Improve documentation and examples.

---

**Let’s make Node.js callback management easier and cleaner for everyone!**
