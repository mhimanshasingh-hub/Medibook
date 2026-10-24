# MediBook – MySQL Database Version

Full-stack doctor appointment booking demo using HTML, CSS, JavaScript, Node.js, Express.js and MySQL.

## 1. Requirements
- Node.js installed
- MySQL Server + MySQL Workbench (or MySQL CLI)

## 2. Database
Open MySQL Workbench and run `database/medibook.sql`.

## 3. Backend
Open terminal in `backend`:

```bash
npm install
```

Copy `.env.example` to `.env` and put your MySQL password in `DB_PASSWORD`.

Then:

```bash
npm start
```

Backend/frontend: http://localhost:5000

## 4. Use the app
Open http://localhost:5000 in Chrome. Search a doctor, book an appointment, then enter the same patient name in My Appointments and click View.

## API
- GET `/api/doctors`
- GET `/api/appointments?patient=NAME`
- POST `/api/appointments`
- DELETE `/api/appointments/:id`
- GET `/api/health`

## Important
This is a college/demo project. It does not implement real authentication, payments, medical records, or production security.
