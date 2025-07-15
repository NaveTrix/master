# JavaScript Case Study: Building a Real-Time Chat App

## Scenario
A startup wants to launch a real-time chat application using JavaScript and WebSockets for instant messaging between users.

## Steps Taken
1. **Frontend:** Use HTML, CSS, and JavaScript to build the chat UI.
2. **WebSocket Integration:** Connect to a Node.js backend using the WebSocket API.
3. **Message Handling:** Send and receive messages in real time.
4. **User Authentication:** Implement simple login and user sessions.
5. **Security:** Sanitize inputs to prevent XSS and use HTTPS.

## Hands-On Lab: Real-Time Chat
1. Set up a Node.js server with the ws library.
2. Build a simple HTML/JS frontend for chat.
3. Connect frontend and backend using WebSockets.
4. Add user authentication and message history.
5. Test for security and performance.

## Best Practices
- Always sanitize user input.
- Use secure WebSocket (wss://) in production.
- Handle connection errors gracefully.

## Interview Q&A
**Q: What is a WebSocket?**
A: A protocol for full-duplex communication between client and server over a single TCP connection.

**Q: How do you prevent XSS in chat apps?**
A: Sanitize and encode all user-generated content before rendering.

## References
- [MDN: WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Node.js ws Library](https://github.com/websockets/ws)

## Diagram
![Real-Time Chat](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/websocket-diagram.png)
