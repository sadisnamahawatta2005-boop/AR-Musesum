# AR Mini Museum — Relics of Antiquity

A web-based Augmented Reality (WebAR) virtual museum application built using **HTML5, CSS3, JavaScript (ES6+), A-Frame (v1.6.0), and AR.js (v3.4.7)**.

Visitors can explore, manipulate, and inspect 3D historical and cultural artifacts in real-time through their device webcam or mobile camera using the standard **Hiro marker**.

---

## 🏛️ Project Overview

The **AR Mini Museum** delivers an accessible, cross-platform augmented reality experience directly in the web browser without requiring native app installations. It features a curated exhibition of ancient artifacts across Mediterranean, Roman, and ancient Sri Lankan civilizations.

### ✨ Key Features

1. **Hiro Marker Tracking & Detection:**
   - Real-time marker detection via device webcam or mobile camera.
   - Displays 3D museum objects anchored steadily above the Hiro marker.
   - Smoothly hides objects when the marker leaves the camera view.
   - **Status Banner:** Dynamically shifts text and color:
     - 🔴 **Searching:** Red/Amber badge with pulsing beacon when searching for the marker.
     - 🟢 **Detected:** Glowing emerald badge indicating tracking lock and active exhibit name.

2. **At Least 5 Diverse Historical 3D Objects:**
   - 🏺 **Ancient Pottery:** *Attic Terracotta Amphora (c. 530 BCE)* — Double-handled vessel with pedestal, foot, neck, rim, and Greek geometric key accents.
   - 🐘 **Ancient Statue:** *Royal Ceremonial Guardian Tusker (c. 3rd Century BCE)* — 3D glTF/GLB model depicting the sacred royal elephant guardian of ancient Sri Lankan stupas and palace gates.
   - 🪙 **Ancient Coins:** *Roman Imperial Aureus & Mediterranean Hoard (c. 27 BCE)* — Large high-relief golden Aureus on crimson velvet plinth with orbiting satellite trade coins.
   - ⚔️ **Ancient Sword:** *Imperial Roman Gladius Hispaniensis (c. 1st Century CE)* — Double-edged leaf blade with crossguard, ribbed grip, spherical pommel, and jeweled carnelian stone.
   - 🏛️ **Historical Building:** *Classical Doric Parthenon (c. 447 BCE)* — Multi-tiered stylobate, 6 peripteral Doric columns, entablature, pediment, and inner sanctum eternal flame altar.
   - 🌐 **Grand Museum Hall:** *Complete Multi-Object Lecture Showcase* — Simultaneous display of all artifacts, lecture bouncing ball (`change-color`), custom growing relic, rotating primitives, and `<a-text>` label.

3. **Smooth 3D Animations:**
   - Continuous smooth Y-axis auto-rotation for 360° inspection.
   - Bouncing vertical oscillation (workshop ball).
   - Planetary orbital revolution for satellite coins.
   - Shimmering celestial aura and breathing particle gleams.

4. **Rich User Interactions:**
   - **Tap / Click 3D Objects:** Direct raycasted interaction on desktop and mobile.
   - **Change Object Finish / Patina:** Tapping artifacts or pressing the palette button cycles authentic materials (e.g., Terracotta Red, Black Glaze, Imperial Gold, Archaic Bronze, Verdigris Patina).
   - **Workshop Ball `change-color` Component:** Preserved and enhanced from lecture step 5.
   - **Custom Interactive Component (`interactive-transform`):** Written from scratch to smoothly scale/grow artifacts (1.45x) with bounce easing, illuminate glowing emissive materials, and trigger curatorial inspection feedback.
   - **Interactive 3D Toolbar:** Manual 15° step rotation (left/right), zoom in / zoom out (+/-), toggle auto-rotation, and reset view.

5. **Dynamic Curatorial Information & Audio Guide:**
   - Collapsible frosted-glass bottom drawer displaying historical era, cultural origin, detailed archaeological description, and fascinating curator notes.
   - **Spoken Audio Guide:** Integrated Web Speech API audio guide narrating object history aloud at the touch of a button.
   - **Synthesized Sound Effects:** Built-in Web Audio API sound generator providing subtle audio feedback for marker detection, taps, and expansions with zero external file dependencies or CORS latency.

6. **Modern Museum Aesthetic & Responsive UI:**
   - Modern historical palette: Midnight Navy (`#070c18`, `#0e172a`), Burnished Gold (`#d4af37`), and Antique Bronze (`#cd7f32`).
   - Cinzel serif typography paired with clean Inter sans-serif body.
   - Introductory lobby with step-by-step guides, gallery preview cards, Hiro marker viewer/download modal, and quick visitor guide modal.
   - Graceful camera loading indicator and exit-to-lobby workflow.

---

## 🗂️ Project File Structure

```text
AR PROJECT/
│
├── index.html                   # Main application entry point & A-Frame AR scene
├── style.css                    # Modern historical museum stylesheet (responsive)
├── script.js                    # A-Frame components, audio engine, & UI controllers
├── README.md                    # Project documentation & credits
│
└── assets/
    ├── markers/
    │   ├── hiro.png             # Official printable/displayable Hiro marker image
    │   └── pattern-hiro.patt    # Hiro marker pattern file for AR.js tracking
    ├── models/
    │   └── elephant_3d_model.glb# 3D glTF/GLB Royal Guardian Tusker statue model
    └── images/
        ├── logo.svg             # Museum brand emblem (temple facade)
        ├── pottery.svg          # Ancient amphora icon
        ├── statue.svg           # Royal guardian elephant icon
        ├── coin.svg             # Roman Aureus coin icon
        ├── sword.svg            # Legionary gladius icon
        └── temple.svg           # Classical Doric temple icon
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5 & CSS3** | Modern semantic structure, glassmorphism UI overlays, responsive layout |
| **JavaScript (ES6+)** | State management, event handling, Web Audio synthesis, Web Speech API |
| **A-Frame (v1.6.0)** | WebGL entity-component 3D scene graph and primitive construction |
| **AR.js (v3.4.7)** | Camera feed management and computer vision marker tracking |
| **Three.js** | Underlying 3D WebGL rendering engine |
| **Webcam / Camera API** | Real-time device video feed capture via `getUserMedia` |

---

## 📜 3D Model Licence & Attribution

In accordance with the project guidelines:
- **Model Name:** Royal Ceremonial Guardian Elephant (*Gaja Sthamba*)
- **File:** `assets/models/elephant_3d_model.glb`
- **Format:** glTF 2.0 Binary (GLB)
- **Geometry:** 48 nodes, 47 meshes, optimized low-polygon real-time asset
- **Generator:** Trimesh glTF Exporter (`https://github.com/mikedh/trimesh`)
- **Licence:** Creative Commons Attribution 4.0 International (CC BY 4.0)
- **Credit:** Free 3D community asset adapted and optimized for WebAR mobile performance in education and research.

---

## 🚀 Running the Project Locally

Because browser security policies require a secure origin (HTTPS or `localhost`) to access the device webcam, run the application through a local web server:

### Option 1: Using Python 3 (Installed on system)

1. Open a terminal in the project directory:
   ```bash
   cd "C:\Users\pesad\Desktop\AR PROJECT"
   ```
2. Start the HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:8000
   ```

### Option 2: Using Node.js / npx

1. Run:
   ```bash
   npx serve .
   # or
   npx http-server -p 8080
   ```
2. Open `http://localhost:8080` in your browser.

---

## 🌐 Deploying to Public HTTPS (GitHub Pages or Netlify)

Webcam access on smartphones (iOS Safari and Android Chrome) **strictly requires HTTPS**. Deploy the site to any of the following free hosting providers:

### Deploying to GitHub Pages (Recommended)

1. Create a new public repository on GitHub (e.g. `ar-mini-museum`).
2. Push the project files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AR Mini Museum complete implementation"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
3. In GitHub, navigate to **Settings > Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your live HTTPS URL will be available at:
   ```text
   https://<YOUR_USERNAME>.github.io/<REPO_NAME>/
   ```

### Deploying to Netlify Drop

1. Visit [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `AR PROJECT` folder into the upload box.
3. Your live HTTPS link will be generated instantly (e.g., `https://ar-mini-museum-exhibition.netlify.app`).

---

## 📱 How to Test on Mobile / Laptop

1. Open the live HTTPS URL on your smartphone or laptop.
2. Click **"Enter AR Exhibition"** and grant camera permissions.
3. Show the **Hiro Marker** to the camera:
   - You can click **"View Hiro Marker"** on another device (or on your laptop screen).
   - Alternatively, print `assets/markers/hiro.png` on standard paper.
4. As soon as the marker enters the camera frame:
   - The top banner turns **green** (`Hiro Marker Detected`).
   - The 3D historical artifact materializes directly over the marker.
   - Tap artifacts to change colors or expand details.
   - Switch exhibits using the bottom dock pills.

---

## 📋 Module Submission Guidelines Reminder

- **Single Submission:** Only one designated member per group submits the assignment.
- **GitHub Repository Link:** Create a Word document containing your public GitHub repository link and live hosted link (GitHub Pages or Netlify).
- **Public Visibility:** Confirm that your GitHub repository is set to **Public**.
- **File Naming Format:** Rename the Word document with your **Group Number** (e.g. `Group_12_AR_Museum.docx`) before submitting to the portal.

