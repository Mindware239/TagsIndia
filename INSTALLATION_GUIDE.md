# TagsIndia - Installation & User Guide

Welcome to the TagsIndia platform! This guide will walk you through setting up and running the project on any new system, including all required installations, configuration changes, and troubleshooting tips.

---

## 1. System Requirements

- **Node.js**: v20 or higher (LTS recommended)
- **npm**: v8 or higher (comes with Node.js)
- **PostgreSQL**: v13 or higher
- **Git**: (optional, for cloning the repository)
- **Windows, macOS, or Linux**

---

## 2. Clone the Repository

```bash
git clone <your-repo-url>
cd TagsIndia
```

---

## 3. Install Project Dependencies

```bash
npm install
```

This will install all backend and frontend dependencies as defined in `package.json`.

---

## 4. Set Up the Database

### A. Install PostgreSQL
- Download and install from: https://www.postgresql.org/download/
- During installation, set a username and password (e.g., `postgres` / `admin123`).

### B. Create the Database
- Open a terminal or command prompt and run:

```bash
psql -U postgres
```
- Enter your password when prompted.
- Then run:
```sql
CREATE DATABASE tagsindia_db;
```
- Exit psql with `\q`.

---

## 5. Configure Environment Variables

Create a `.env` file in the project root with the following content (edit values as needed for your system):

```
DATABASE_URL=postgresql://postgres:admin123@localhost:5432/tagsindia_db
NODE_ENV=development
PORT=5000
```
- Replace `postgres` and `admin123` with your actual PostgreSQL username and password if different.
- If you use a different database name, update `tagsindia_db` accordingly.

---

## 6. Initialize the Database Schema

Run the following command to apply the schema to your database:

```bash
npm run db:push
```

---

## 7. Seed the Database with Sample Data

```bash
npx tsx server/seed.ts
```

---

## 8. Start the Development Server

```bash
npm run dev
```
- The server will start on [http://localhost:5000](http://localhost:5000)
- Open this URL in your browser.

---

## 9. Common Issues & Troubleshooting

### A. Port Already in Use
- Error: `EADDRINUSE: address already in use 127.0.0.1:5000`
- Solution: Stop any other process using port 5000, or restart your computer.

### B. DATABASE_URL Not Set
- Error: `DATABASE_URL must be set. Did you forget to provision a database?`
- Solution: Ensure your `.env` file exists and is correct. Restart your terminal after creating `.env`.

### C. PostgreSQL Connection Refused
- Error: `ECONNREFUSED` or authentication failed
- Solution: Make sure PostgreSQL is running and your credentials in `.env` are correct.

### D. Windows Environment Variables
- If `.env` is not picked up, the `dev` script in `package.json` sets `DATABASE_URL` using `cross-env` for reliability.

### E. Database Not Seeded
- If the site loads but no products appear, run:
  ```bash
  npx tsx server/seed.ts
  ```

---

## 10. Customizing for Your System

- **Database Credentials**: Change `DATABASE_URL` in `.env` to match your local PostgreSQL setup.
- **Port**: Change `PORT` in `.env` if you want to use a different port.
- **Dependencies**: If you encounter missing package errors, run `npm install` again.

---

## 11. Production Build (Optional)

To build for production:
```bash
npm run build
npm run start
```

---

## 12. Support & Further Help

- Check this guide for troubleshooting.
- Review error messages in your terminal for hints.
- For advanced help, consult the README or open an issue in your repository.

---

**Enjoy using TagsIndia!**