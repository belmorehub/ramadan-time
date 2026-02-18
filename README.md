# 🌙 Ramadan Sun Tracker

A beautiful, real‑time web app that shows the sun’s path from Sehar (Fajr) to Iftar (Maghrib) with full prayer times for multiple cities. Watch the sun move across the sky, see the next prayer countdown, and enjoy a custom Ramadan‑themed design with stars, a crescent moon, and lanterns.

**Live demo**: [https://ramadantime.edgeone.app/]

---

## ✨ Features

- **Animated sun** – moves along an arc from Sehar to Iftar based on the actual time of day.
- **Dynamic sky** – background changes from night → dawn → day → evening → night, with twinkling stars and a crescent moon after sunset.
- **Five prayer times** – Sehar (Fajr), Duhr, Asr, Iftar (Maghrib), and Isha – displayed clearly.
- **Next prayer countdown** – shows the time remaining until the next salah.
- **City selector** – choose from Shakargarh, Sydney, Lahore, or London. Timetables are embedded (no external API calls).
- **Ramadan aesthetics** – gold accents, lantern animations, mosque silhouette, and a beautiful Urdu footer.
- **Fully responsive** – works on desktop, tablet, and mobile.
- **Offline‑ready** – all data is inside the JavaScript file; no network required after loading.

---

## 🖥️ How to Use

1. Visit [https://ramadantime.edgeone.app/].
2. Select your city from the dropdown in the top‑left corner.
3. Watch the sun move in real time as the day progresses.
4. See all prayer times in the grid.
5. The big card shows the next prayer and a live countdown.
6. At night, stars and a crescent moon appear; lanterns light up.


## 🛠️ Built With

- HTML5, CSS3, JavaScript (vanilla, no frameworks)
- Canvas API for sky animations
- Embedded JSON prayer timetables (no backend required)
- Google Fonts: Amiri, Cinzel, Noto Nastaliq Urdu

---

## 📁 Project Structure
/
├── index.html # Main HTML file
├── styles.css # All styling
├── script.js # Full application logic + embedded data
└── README.md # This file
