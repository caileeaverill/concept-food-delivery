# 🥬 Concept Food Delivery

A sleek and minimal concept site for browsing grocery store departments and discovering featured food items. Built to explore UI design, data structuring, and responsive layout techniques.

🔗 **Live Site:**  
[https://concept-food-delivery.vercel.app/](https://concept-food-delivery.vercel.app/)

---

## ✨ Features

- 🛒 Dynamic department listings with realistic images  
- 🎲 Faker-powered randomized department data  
- 📱 Fully responsive layout optimized for desktop and mobile  
- 🖼️ Curated Unsplash images for a rich visual experience  
- 🧪 Ideal for frontend prototyping and UI experimentation  

---

## 🧰 Tech Stack

- **React** (Vite)  
- **TypeScript**  
- **Tailwind CSS**  
- **ShadCN/UI** for accessible and themeable components  
- **React Icons** for iconography  
- **Faker.js** for mock data  
- **Unsplash** images for visuals  
- **Deployed with Vercel**

---

## 📁 Project Structure Highlights

- `src/data/`  
  → Contains all static and mock data used throughout the app (e.g. grocery department info, FAQs).

- `src/pages/`  
  → Main pages of the app, each acting as an entry point (e.g. `Home.tsx`, `About.tsx`).

- `src/components/`  
  → Shared, reusable UI components (e.g. buttons, headers, cards).

- `src/components/PageComponents/` *(optional)*  
  → Page-specific components organized by page (e.g. `HomeComponents/`, `AboutComponents/`).

- `src/hooks/`  
  → Custom React hooks for abstracting logic (if needed).

- `src/lib/`  
  → Utility functions, API clients, or external libraries.

- `src/assets/`  
  → Static assets like images, fonts, or icons.

---

## 📱 Mobile View

The layout is fully responsive and optimized for mobile devices:

- Grid adjusts to a **single column** on smaller screens for easy browsing.
- Images and text scale gracefully to maintain visual clarity.
- Tailwind’s responsive utilities (`grid-cols-1`, `sm:grid-cols-2`, `md:grid-cols-3`) ensure a smooth layout transition across devices.

<img src="https://github.com/caileeaverill/concept-food-delivery/blob/main/src/assets/mobile-view.png" alt="Mobile View" width="400" />


---

## 🛣️ Roadmap

Planned enhancements and features for future iterations:

- 🧃 **Filterable Mock Data**  
  Add category-based filtering to refine the department grid view (e.g. produce only, beverages only).

- 🔍 **Search Functionality**  
  Implement a search bar to allow quick navigation to specific departments or items.

- 📦 **Product Detail Pages**  
  Individual pages showing details, images, and mock pricing for grocery items.

- 🕒 **Store Hours & Features Integration**  
  Display open/close times and store amenities dynamically.

- ❤️ **User Favorites**  
  Let users "like" or bookmark preferred departments or items (stored in local state or mock backend).
