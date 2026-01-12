# 🎨 Scribble Live – Real-Time Drawing & Guessing Game

Scribble Live is a **real-time multiplayer drawing and guessing game**, inspired by Skribbl.io.
Players join a room, take turns drawing a word on a canvas, and other players guess the word in real time.

This project is built using the **MERN stack** with **Socket.IO** for real-time communication.

---

## 🚀 Project Idea

The main idea of this project is to build a **real-time collaborative drawing game** where:

* One user draws on a canvas
* Everyone else sees the drawing **live**
* Players guess the word using chat
* Points are awarded based on correct guesses
* The game runs in rounds with timers and turns

---

## 🧠 Core Problems Solved

* 🔴 Real-time canvas synchronization
* 🔴 Multi-user room management
* 🔴 Live chat and word guessing
* 🔴 Turn-based gameplay
* 🔴 Timer handling on the server
* 🔴 Scalable real-time communication

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **HTML5 Canvas API**
* **Socket.IO Client**
* **CSS / Tailwind (optional)**

### Backend

* **Node.js**
* **Express.js**
* **Socket.IO Server**

### Database

* **MongoDB** (for users, rooms, scores)

---

## 🔌 Why Socket.IO?

Socket.IO is used to:

* Send drawing coordinates in real time
* Sync canvas across all players
* Handle chat messages
* Manage rooms and turns
* Control timers and game state

⚠️ Instead of sending images, only **mouse coordinates** are sent for better performance.

---

## 🖌️ Drawing Data Format (Example)

```json
{
  "x": 120,
  "y": 240,
  "color": "black",
  "lineWidth": 3
}
```

---

## 📁 Project Structure

### Backend

```
server/
 ├── index.js
 ├── socket/
 │    └── gameSocket.js
 ├── models/
 │    ├── User.js
 │    └── Room.js
 ├── routes/
 │    └── auth.js
```

### Frontend

```
client/
 ├── src/
 │    ├── pages/
 │    │    ├── Lobby.jsx
 │    │    └── Game.jsx
 │    ├── components/
 │    │    ├── Canvas.jsx
 │    │    └── Chat.jsx
 │    ├── socket.js
 │    └── App.jsx
```

---

## 🔄 Application Flow

1. User creates or joins a room
2. Server assigns turns and a word to draw
3. Drawer draws on canvas
4. Drawing coordinates are broadcast to all players
5. Players guess using chat
6. Server checks guesses and updates score
7. Timer ends → next player’s turn

---

## 📌 Features (Planned)

* ✅ Real-time drawing
* ✅ Live chat
* ✅ Room-based gameplay
* ✅ Timer-based rounds
* ⏳ Score system
* ⏳ Word selection
* ⏳ Authentication (optional)

---

## 🧪 Learning Outcomes

This project helps in learning:

* WebSockets & real-time systems
* Canvas drawing in browsers
* Multiplayer game logic
* State synchronization
* Backend-driven game control
* MERN stack integration

---

## 📦 Future Improvements

* Voice chat using WebRTC
* Mobile responsiveness
* Admin controls
* Redis for scalability
* Reconnect & resume support

---

## 👨‍💻 Author

**Vishal Vishwakarma**
Full Stack Developer (MERN)

---

⭐ If you like this project, don’t forget to star the repository!

---

