# AEGIS — Smart Stadium Intelligence

AEGIS is an advanced smart-stadium management system designed to drastically improve large-scale in-person event experiences. It provides real-time situational awareness for event organizers, and a frictionless, guided experience for attendees.

## 🎯 Chosen Vertical
**In-Person Event Experience / Smart Venues**

This project focuses on the chaotic environment of massive physical events (sports games, concerts). Our goal is to transform chaotic crowds into managed flows, ensuring attendee safety, minimizing wait times for facilities, and giving organizers god-mode visibility over the entire venue.

## 🧠 Approach and Logic
Large events fail when there is an information disconnect between the crowd and the organizers. Our approach bridges this gap using a **Role-Based Dual Interface System**:

1. **Attendee Interface (User Dashboard):** 
   - Hyper-personalized. It strips away the noise and gives the user exactly what they need: their digital QR ticket, their seat assignment, the fastest entry gate, and live notifications avoiding bottlenecks.
   - Includes a "Report Lost Person" emergency flow that instantly communicates with the organizer side.
2. **Operations Interface (Organizer Dashboard):**
   - High-level tactical view. Organizers don't need to know individual names; they need to see flows, congestions, and emergencies.
   - We utilized a live interactive map (Leaflet + OpenStreetMap) centered on the venue (JLN Stadium, Delhi) to visualize data in a geographical context. Staff can trigger scenarios (Evacuations, Congestion) to see how the system responds.

## ⚙️ How the Solution Works
The application is built using **React** and styled with modern, responsive CSS (Glassmorphism design language).

### Key Features:
* **Interactive Venue Map:** Using `react-leaflet`, we plotted JLN Stadium with real-world coordinates and populated it with interactive markers for essential facilities (Gates, Washrooms, Food Stalls, Medical Staff).
* **Live Reunification Hub:** Attendees can report a lost child/person from their dashboard. The data is instantly synced (currently utilizing a polling `localStorage` mechanism mimicking a NoSQL database/Firebase) to the Organizer Dashboard, where staff can dispatch help and mark the case as resolved.
* **Smart Routing & Wait Times:** Food stalls and entry gates have simulated wait times. The dashboard intelligently advises users which gates to use to avoid bottlenecks.
* **Unified UI/UX:** A highly polished "Light Mode" dashboard with premium aesthetics to ensure critical alerts (like medical emergencies) stand out visually without overwhelming the user.

## 🤔 Assumptions Made
To build this MVP, we operated on a few core assumptions:
1. **Connectivity:** We assume the venue has adequate WiFi or cellular coverage so attendees can access the web application live during the event.
2. **Smart device adoption:** We assume over 90% of the crowd possesses a smartphone capable of rendering a standard React web application and displaying a QR code.
3. **Simulated Backend:** We assumed the requirement was an MVP frontend prototype. Features that require backend real-time sync (like the Reunification HUB) are currently functioning via `localStorage` polling to simulate how a real Firebase/WebSocket connection would behave.
4. **Static Venue Mapping:** The current iteration hardcodes the geolocation coordinates for Jawaharlal Nehru Stadium. In a production environment, this data would be fetched dynamically based on the event the user is attending.
5. **Sensor Data:** The organizer dashboard displays metrics like "Avg Gate Latency" and "Heart Rate Anomalies". We assume the venue is equipped with smart-gates or biometric integrations that would pipe this data into our eventual backend API.

---
*Built for the future of live events.*
