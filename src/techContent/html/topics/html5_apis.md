# HTML5 APIs

## Key Concepts
- **Canvas API:** Draw 2D graphics, charts, and animations with JavaScript. Used for games, data visualization, and custom drawing tools.
- **SVG API:** Create and manipulate vector graphics directly in the DOM. Scalable and accessible.
- **Audio/Video API:** Control media playback, volume, and tracks. Use `<audio>` and `<video>` elements with JavaScript for advanced features.
- **Geolocation API:** Get user's location (latitude, longitude) with user permission. Used in maps, local search, and location-based services.
- **Local Storage & Session Storage:** Store key-value data in the browser. Local Storage persists across sessions; Session Storage is cleared on tab close.
- **Drag and Drop API:** Enable drag-and-drop functionality for files, images, and custom elements.
- **Web Workers:** Run JavaScript in background threads for performance.
- **WebSockets:** Real-time, two-way communication between client and server.
- **Notifications API:** Show desktop notifications from web apps.
- **Fullscreen API:** Make elements go fullscreen for immersive experiences.

## Real-World Example
- Using the Geolocation API to show a user's location on a map.
```html
<button onclick="getLocation()">Show My Location</button>
<div id="output"></div>
<script>
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      document.getElementById('output').textContent =
        `Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`;
    });
  }
}
</script>
```
- Using Local Storage to save user preferences:
```js
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
```

## Best Practices
- Always ask for user permission before accessing sensitive APIs (e.g., geolocation, notifications).
- Handle errors and fallback scenarios gracefully.
- Use feature detection to check API support.
- Avoid blocking the main thread—use Web Workers for heavy computation.

## Interview Q&A
**Q: What is the Canvas API used for?**
A: Drawing graphics, charts, and animations in the browser using JavaScript.

**Q: How do you store data on the client side?**
A: Use Local Storage or Session Storage APIs for key-value storage in the browser.

**Q: What is the difference between Canvas and SVG?**
A: Canvas is pixel-based and good for real-time graphics; SVG is vector-based, accessible, and better for static or interactive graphics.

## References
- [HTML5 APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

## Relevant Image
![HTML5 APIs](https://developer.mozilla.org/en-US/docs/Web/API/html5-apis.png)
