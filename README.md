
#  Personal Website🍓

This is an personal website made for fun and learning.  
The project focuses on custom UI design, fun UI interactions, and experimenting with both frontend and backend technologies.

It is **not meant to be a polished or professional website**. It is my creative space to try ideas, learn, and build things that feel fun or useful.

---

##  Features

- Custom-designed UI (designed from scratch)
- Gallery with personal screenshots from my favourite video game
- Teletext (TXT TV) viewer using the **YLE Teletext API**
- Countdown page for events im waiting for
- Login & register system (work in progress)
- Notes page (work in progress) where users can:
  - Add notes
  - View notes from other users

---

## Tech Stack

### Frontend
- React
- Next.js
- Plain CSS
- CSS Modules

### Backend
- Node.js
- Express
- MongoDB

### APIs
- YLE Teletext API

---

## Project Status

This project is **still a work in progress**.

Planned improvements:
- [ ] Finish login & registration functionality
- [ ] Finish notes page
- [ ] Improve UX and UI details
- [ ] Deploy the project once authentication is fully implemented

The site will be deployed on **Render** once the login system is complete.

---

## Running the Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/LCFranck/Personal-website.git

```
### 2. Install dependencies
```
cd frontend
npm install

cd ../backend
npm install
```

3. Environment variables
You must create your own .env files for:
- MongoDB connection
- YLE Teletext API

These are required for the app to function correctly. The .env files should be in the root of both the backend and frontend directories.
The frontend should contain,
 ```ini
NEXT_PUBLIC_TV_API=<API>
```
and backend should contain
```ini
MONGODB_URI=<uri>
PORT=3001
SECRET=<secret>
```

4. Start the project
run this in both frontend and backend directories
```
npm run dev
```
now everything should be running





