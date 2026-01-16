
#  Personal Website🍓

URL: https://personal-website-frontend-n1lo.onrender.com 

This is an personal website made for fun and learning.  
The project focuses on custom UI design, fun UI interactions, and experimenting with both frontend and backend technologies.

It is **not meant to be a polished or professional website**. It is my creative space to try ideas, learn, and build things that feel fun or useful.

---

##  Features
- Now deployed on render!
- Custom-designed UI (designed from scratch)
- Gallery with personal screenshots from my favourite video game
- Teletext (TXT TV) viewer using the **YLE Teletext API**
- Countdown page for events im waiting for
- Login & register system (work in progress)(doesn't work yet)
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
- [ ] Improve UX and UI details in login and profile
- [x] Deploy the project
- [ ] Make it mobile friendly
- [ ] Move gallery to backend (to improve efficiency and)



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

## Screenshots of current version
<img width="2847" height="1507" alt="countdown page" src="https://github.com/user-attachments/assets/3af328fb-45c5-4b8f-8cad-427fc668b910" />
<img width="2815" height="1520" alt="gallery page1" src="https://github.com/user-attachments/assets/5f813693-f4d1-4c31-ae6f-e73876fa141f" />
<img width="2876" height="1043" alt="homepage" src="https://github.com/user-attachments/assets/d7193df5-fa0e-4a46-bf0b-f2b24c5d5b4b" />
<img width="2827" height="1508" alt="teletext page" src="https://github.com/user-attachments/assets/946d3958-00ad-4007-a1a6-12b928f79f9a" />
<img width="1903" height="937" alt="note page" src="https://github.com/user-attachments/assets/641ad4fe-b1e4-4323-813b-d96a2b7b4223" />




