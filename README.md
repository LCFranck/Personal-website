
#  Personal Website
## About


This is an personal website made for fun and learning.  
The project focuses on custom UI design, fun UI interactions, and experimenting with both frontend and backend technologies.

### IMPORTANT
Right now the deployment is down, due to the free tier on Render being limited. Will be up again in march or sooner if I upgrade to a paid tier.
URL: https://personal-website-frontend-n1lo.onrender.com 

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

##  Notes
- Render is very slow
- be patient when regitering the first time, might take a while. but you will be logged in after pressing register
- password needs to be 3 character long
- I do not have error notifications yet so if something is not working you can always check the console

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
- [x] Finish login & registration functionality
- [ ] make notifications
- [ ] add functionality to delete notes
- [x] Finish notes page
- [x] Improve UX and UI details in login and profile
- [x] Deploy the project
- [x] Make it mobile friendly
- [x] make "About me" page actually say something about me



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
<img width="2554" height="1226" alt="Home page" src="https://github.com/user-attachments/assets/677433a1-7a2f-4122-8f9e-9f55487de0c8" />
<img width="2542" height="1242" alt="About me page" src="https://github.com/user-attachments/assets/95aee815-b791-490c-9695-74e0ed12a16f" />
<img width="2537" height="1243" alt="Gallery page" src="https://github.com/user-attachments/assets/ed1e0a1d-49f0-4659-8486-e8dbbcb0ab6d" />
<img width="2553" height="1233" alt="Txt TV page" src="https://github.com/user-attachments/assets/2bf72405-6154-4bbb-a744-96f03d5efb3e" />
<img width="2547" height="1235" alt="Notes page" src="https://github.com/user-attachments/assets/2885f269-6087-4be7-a77f-dd851ec21680" />
<img width="2551" height="1134" alt="Countdown page" src="https://github.com/user-attachments/assets/4176ce94-89d9-4c0c-b94e-faf357b8d8e0" />
<img width="2540" height="965" alt="Login page" src="https://github.com/user-attachments/assets/450875c7-1b13-429e-b023-d0e088f96cf3" />
<img width="2531" height="1160" alt="Register page" src="https://github.com/user-attachments/assets/d8a38818-a788-4e8a-8630-77cea4214118" />



