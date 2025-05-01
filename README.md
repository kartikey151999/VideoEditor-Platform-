*************  Readme.md File  ***************

This project is the frontend implementation of a browser-based video editing tool. Users can upload videos, edit scenes, add subtitles and overlays, preview changes in real-time, and simulate rendering/export.

 Features

- Video Upload with drag-and-drop & thumbnail preview  
- Timeline editing with cutscene arrangement  
- Audio management (mute, reorder, mock waveform)  
- Subtitle & Text Overlay with styling options  
- Image overlays (resizable, draggable)  
- Real-time video preview  
- Mock render & export/download functionality  

---

 Tech Stack

1. Next.js (App Router) -  React framework with routing 
2. React.js       -  Component-based UI                     
3. Tailwind CSS  - Utility-first styling framework         
4. ShadCN UI     -  Prebuilt accessible UI components       
5. Redux Toolkit  -  Global state management                 
6. React Dropzone - File drag-and-drop upload UI            
7. React DnD   - Timeline drag & drop logic              
8. Lucide React   - Icons                                   

---

Installation & Setup

 1. Clone the Repository

```bash
git clone https://github.com/kartikey151999/video-editor-frontend.git
cd video-editor-frontend
```

2. Install Dependencies**

```bash
npm install
# or
yarn install
```

3. Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

Then visit: `http://localhost:3000`

---

 Project Structure

```
.
├── app/
│   ├── page.tsx                 # Landing page
│   ├── upload/                  # Video upload screen
│   ├── timeline/                # Video timeline editor
│   ├── subtitles/              # Subtitle/text overlay UI
│   ├── preview/                # Preview and render page
│
├── components/
│   ├── ui/                     # Shared UI components (Buttons, Selects)
│   ├── timeline/              # Timeline visuals and controls
│
├── redux/
│   ├── store.ts                # Redux store setup
│   └── slices/                 # Timeline, audio, subtitle state slices
│
├── styles/
│   ├── globals.css             # Tailwind & global styles
│
├── public/
│   └── assets/                 # Placeholder videos, images
│
├── README.md
└── package.json
```

---

 Mock & Simulated Features

Some functionality like rendering, waveform generation, export/download is simulated using loaders or mock APIs. These will need real backend support for production.

---

 UX & Styling

- Dark theme UI with responsive layout
- Clean component spacing using Tailwind
- ShadCN for buttons, dialogs, tabs, inputs
- Toasts & loaders simulate real-time feedback

---
