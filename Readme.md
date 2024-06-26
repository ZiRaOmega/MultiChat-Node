# Chat Application

Welcome to the Chat Application!

This application allows users to choose a chat room from a dropdown menu and send messages to that room.

## Installation

To install the Chat Application, follow these steps:
```bash
npm i express ws pug cookie-parser --save
```
To run the Chat Application :
```bash
    npm run start
```
OR
```bash
    node ./bin/www
```
## Usage

To use the Chat Application, follow these steps:

1. Select a chat room from the dropdown menu.
2. Enter a message in the input field.
3. Click the "Send" button to send the message to the selected chat room.
4. To leave the current chat room, click the "Leave" button.

## Files

The Chat Application consists of the following files:

- `/Chat`: This folder contains the code for the WebSocket server that sends and receives messages to and from the chat rooms.
- `index.js`: This file contains the code for the server that host html and handle websocket queries.
- `pug` template: This file contains the HTML layout for the Chat 

sequenceDiagram
    participant User
    participant Web Browser
    participant Web Server
    participant WebSocket Server

    User ->> Web Browser: Open Chat Application
    Web Browser ->> Web Server: GET /index.html
    Web Server ->> Web Browser: index.html
    Web Browser ->> User: Render index.html

    User ->> Web Browser: Enter Username and Message
    Web Browser ->> WebSocket Server: WebSocket Connect
    WebSocket Server ->> Web Browser: Connection Acknowledged

    User ->> Web Browser: Click Send Button
    Web Browser ->> WebSocket Server: Send Message (JSON)
    WebSocket Server ->> Web Browser: Receive Message (JSON)
    WebSocket Server ->> WebSocket Server: Broadcast Message

    Web Browser ->> User: Display Message

