# 📚 CampusSync - College ERP System

CampusSync is a comprehensive ERP solution tailored for college administration. It streamlines various academic and administrative operations including timetable generation, Bluetooth-based attendance, role-based dashboards, and internal communication.

## 🧠 Project Description

CampusSync is a full-stack ERP system designed to enhance college management and student engagement. The system includes role-based dashboards for students, faculty, HODs, lab assistants, and the principal. It automates lecture and lab allocation, handles practical batch splitting, generates clash-free timetables, and uses Bluetooth-based proximity detection for attendance.

It also supports push notifications for real-time updates and includes robust admin controls.

---

## 🚀 Features

- 🧑‍🏫 **Role-based dashboards**  
  (Students, Faculty, HOD, Lab Assistants, Principal)

- 🧾 **Automated Timetable Generation**  
  Handles labs, batches, room allocation, and avoids subject clashes

- 📍 **Bluetooth-based Attendance**  
  Detect nearby student devices for proximity-based presence marking

- 🔔 **Push Notifications**  
  Real-time alerts for updates, announcements, and schedule changes

- 📊 **Analytics & Reporting**  
  Track attendance, faculty workload, and class coverage

- 📁 **Academic Calendar Support**  
  Exclude holidays/events from scheduling

---

## 🛠️ Tech Stack

| Tech         | Description                      |
|--------------|----------------------------------|
| **React Native (Expo)** | Frontend for mobile and web platforms |
| **Node.js**   | Backend server logic             |
| **MongoDB**   | NoSQL database for all modules   |
| **Socket.io / Expo Push API** | For real-time updates and notifications |
| **Bluetooth API (React Native BLE)** | For attendance system              |

---

## 👨‍💻 Team Members

| Name               | Role                            |
|--------------------|---------------------------------|
| **Prashant Yelurkar** | Backend Developer, Timetable Logic, Attendance |
| **Sahul**          | React Native UI Components      |
| **Saakshi**        | Figma UI Designer, Frontend Layouts |

---

## 🧑‍🏫 Project Guide

**Dr. Prachi Janrao**  
Head of Department  
Department of Artificial Intelligence & Data Science  
Thakur College of Engineering and Technology

---

## ⚙️ How to Run

### 📦 Backend

```bash
cd CampusSync
npm install
npm expo start    # or nodemon index.js
