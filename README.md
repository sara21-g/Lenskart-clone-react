# Lenskart Clone - React Application

## Reference Website
**Original Website:** Lenskart.com (https://www.lenskart.com/)  
**Project Type:** E-commerce Eyewear Store Clone

---

## Project Overview

This is a React-based recreation of the Lenskart website, implementing component-based architecture, props, state management, and dynamic rendering without manual DOM manipulation.

---

## 🗂️ Component Structure (11 Components)

### 1. **App.js** (Main Container Component)
- **Purpose:** Root component managing global state
- **State Managed:**
  - `darkTheme` - Theme toggle (light/dark)
  - `showLoginModal` - Modal visibility
  - `cartCount` - Shopping cart counter
  - `successMessage` - Notification messages
  - `showSuccess` - Success message visibility
- **Features:**
  - Theme persistence with localStorage (useEffect)
  - Visit counter tracking
  - Global state management for child components

### 2. **Header.js** (Navigation Component)
- **Props Received:**
  - `darkTheme` - Current theme state
  - `toggleTheme` - Function to switch themes
  - `cartCount` - Number of items in cart
  - `onLoginClick` - Function to open login modal
- **State Managed:**
  - `activeNav` - Active navigation item
- **Features:**
  - Interactive navigation with active highlighting
  - Smooth scroll to sections
  - Sticky header effect (scroll detection)
  - Cart counter display

### 3. **HeroSlider.js** (Image Carousel Component)
- **Props:** None (self-contained)
- **State Managed:**
  - `currentSlide` - Current slide index (0-2)
- **Features:**
  - Auto-play slider (5-second intervals)
  - Manual navigation (prev/next arrows)
  - Dot navigation
  - State-driven slide transitions

### 4. **CategorySection.js** (Product Categories)
- **Props:** None (uses internal data array)
- **Child Component:** `CategoryCard`
- **Features:**
  - Dynamic rendering of category cards
  - Category data passed as props to child component

### 5. **ProductSection.js** (Product Listing)
- **Props Received:**
  - `onAddToCart` - Callback function to add items to cart
- **Child Component:** `ProductCard`
- **Features:**
  - Product array with 8 items
  - Props passed to each ProductCard
  - Dynamic product rendering

### 6. **ProductCard.js** (Individual Product)
- **Props Received:**
  - `product` - Product data object (name, price, image, etc.)
  - `onAddToCart` - Function to handle cart addition
- **State Managed:**
  - `isWishlisted` - Wishlist toggle state
  - `isAdding` - Button animation state
- **Features:**
  - Wishlist toggle functionality
  - Add to cart with visual feedback
  - Dynamic star rating rendering

### 7. **FeaturesSection.js** (Service Features)
- **Props:** None (uses internal features array)
- **Features:**
  - Dynamic rendering of feature cards
  - Data-driven UI

### 8. **BrandsSection.js** (Brand Showcase)
- **Props:** None (uses internal brands array)
- **Features:**
  - Brand logos as background images
  - Dynamic rendering from array

### 9. **Newsletter.js** (Email Subscription)
- **Props Received:**
  - `onSuccess` - Callback for successful subscription
- **State Managed:**
  - `email` - Email input value
  - `error` - Validation error message
- **Features:**
  - Form validation (email format, empty check)
  - Controlled components (input state binding)
  - Error display with state

### 10. **LoginModal.js** (Authentication Modal)
- **Props Received:**
  - `onClose` - Function to close modal
  - `onSuccess` - Function to show success message
- **State Managed:**
  - `email` - Email input value
  - `password` - Password input value
  - `emailError` - Email validation error
  - `passwordError` - Password validation error
- **Features:**
  - Conditional rendering (modal show/hide)
  - Form validation with multiple fields
  - Controlled form inputs

### 11. **SuccessMessage.js** (Notification Component)
- **Props Received:**
  - `message` - Success message text
- **Features:**
  - Reusable notification component
  - Conditional rendering based on parent state

### 12. **Footer.js** (Site Footer)
- **Props:** None
- **Features:**
  - Static footer with links
  - Social media icons

---

## 🎯 React Features Implemented (7/7)

### ✅ 1. Button Interaction (State-driven UI)
**Implementation:**
- Login button opens modal (controlled by `showLoginModal` state)
- Try Now button shows success message
- Add to cart updates cart counter and shows notification
- All interactions update state, triggering re-renders

**Code Location:** 
- `App.js` - lines 18-27
- `Header.js` - onClick handlers
- `ProductCard.js` - handleAddToCart function

---

### ✅ 2. Form Validation (State-driven)
**Implementation:**
- Newsletter form validates email format
- Login form validates email and password
- Error messages controlled by state variables
- No direct DOM manipulation

**Components:**
- `Newsletter.js` - Email validation with state
- `LoginModal.js` - Multi-field validation with separate error states

**Validation Logic:**
```javascript
// Email pattern check
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  setError('Please enter a valid email address');
}
```

---

### ✅ 3. Theme Toggle (State-driven Content Change)
**Implementation:**
- Dark/light theme controlled by `darkTheme` state
- Icon changes dynamically (moon ↔ sun)
- CSS class applied conditionally: `className={darkTheme ? 'dark-theme' : ''}`
- No manual class manipulation

**Code Location:** `App.js` - lines 10, 28-36

---

### ✅ 4. Show/Hide (Conditional Rendering)
**Implementation:**
- Login modal: `{showLoginModal && <LoginModal />}`
- Success message: `{showSuccess && <SuccessMessage />}`
- Cart badge: `{cartCount > 0 && <span>{cartCount}</span>}`
- Wishlist hearts: State toggles filled/empty icons

**Examples:**
```javascript
// Conditional rendering
{showLoginModal && <LoginModal onClose={...} />}

// Conditional class
<i className={`${isWishlisted ? 'fas' : 'far'} fa-heart`} />
```

---

### ✅ 5. Navigation Highlight (Active State)
**Implementation:**
- `activeNav` state tracks current section
- Active link gets `active` class: `className={activeNav === 'eyeglasses' ? 'active' : ''}`
- Smooth scroll on click
- State updates trigger re-render with new styling

**Code Location:** `Header.js` - lines 6-17

---

### ✅ 6. Image Slider (State Index)
**Implementation:**
- `currentSlide` state (0, 1, or 2)
- Auto-play with setInterval in useEffect
- Conditional rendering: `className={index === currentSlide ? 'active' : ''}`
- Next/prev buttons update state
- Dot navigation sets state directly

**Code Location:** `HeroSlider.js` - entire component

**State Management:**
```javascript
const [currentSlide, setCurrentSlide] = useState(0);

// Auto-play
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

---

### ✅ 7. LocalStorage (useEffect Hook - Bonus)
**Implementation:**
- Theme preference saved: `localStorage.setItem('lenskartTheme', darkTheme ? 'dark' : 'light')`
- Theme loaded on mount: `useEffect(() => { const savedTheme = localStorage.getItem('lenskartTheme'); }, [])`
- Visit counter incremented and stored
- Data persists across sessions

**Code Location:** `App.js` - lines 19-34

---

## 📊 Props Usage

### Components Receiving Props (8 components):

1. **Header**
   ```javascript
   <Header 
     darkTheme={darkTheme}
     toggleTheme={toggleTheme}
     cartCount={cartCount}
     onLoginClick={() => setShowLoginModal(true)}
   />
   ```

2. **ProductSection**
   ```javascript
   <ProductSection onAddToCart={handleAddToCart} />
   ```

3. **ProductCard** (receives product object)
   ```javascript
   <ProductCard 
     product={product}
     onAddToCart={onAddToCart}
   />
   ```

4. **CategoryCard** (receives category object)
   ```javascript
   <CategoryCard category={category} />
   ```

5. **Newsletter**
   ```javascript
   <Newsletter onSuccess={showSuccessMsg} />
   ```

6. **LoginModal**
   ```javascript
   <LoginModal 
     onClose={() => setShowLoginModal(false)}
     onSuccess={showSuccessMsg}
   />
   ```

7. **SuccessMessage**
   ```javascript
   <SuccessMessage message={successMessage} />
   ```

8. **FeaturesSection** (internal props via map)

---

## 🔄 State Management Summary

### Global State (App.js):
- `darkTheme` - Boolean
- `showLoginModal` - Boolean
- `cartCount` - Number
- `successMessage` - String
- `showSuccess` - Boolean

### Component-level State:
- **Header:** `activeNav` (string)
- **HeroSlider:** `currentSlide` (number)
- **ProductCard:** `isWishlisted` (boolean), `isAdding` (boolean)
- **Newsletter:** `email` (string), `error` (string)
- **LoginModal:** `email`, `password`, `emailError`, `passwordError` (all strings)

---

## 🚀 Running the Project

### Installation:
```bash
cd lenskart-react
npm install
```

### Start Development Server:
```bash
npm start
```

### Build for Production:
```bash
npm build
```

---

## 📁 File Structure

```
lenskart-react/
├── public/
│   ├── index.html
│   └── images/              # Copy your images folder here
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── HeroSlider.js
│   │   ├── CategorySection.js
│   │   ├── ProductSection.js
│   │   ├── FeaturesSection.js
│   │   ├── BrandsSection.js
│   │   ├── Newsletter.js
│   │   ├── LoginModal.js
│   │   ├── SuccessMessage.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

---

## 🎨 Styling Approach

- Same CSS from Activity 1 (App.css)
- No CSS framework (plain CSS)
- Dark theme CSS variables
- Responsive design maintained
- All styling through className (no inline styles except dynamic values)

---

## 🔑 Key React Principles Used

1. ✅ **Component-based Architecture** - 12 reusable components
2. ✅ **Props for Data Flow** - Parent-to-child data passing
3. ✅ **State for Interactivity** - useState for dynamic UI
4. ✅ **No DOM Manipulation** - All updates via state changes
5. ✅ **Controlled Components** - Form inputs bound to state
6. ✅ **Conditional Rendering** - {condition && <Component />}
7. ✅ **useEffect Hook** - Side effects (localStorage, intervals)
8. ✅ **Event Handling** - onClick, onSubmit, onChange
9. ✅ **Array Mapping** - Dynamic list rendering
10. ✅ **Functional Components** - Modern React with hooks

---

## 📸 Screenshots Required

### Desktop View:
- Homepage with all sections
- Dark theme toggle
- Product grid
- Login modal open

### Mobile View:
- Responsive header
- Product cards stacked
- Navigation menu

### Interactions:
1. Login modal with validation errors
2. Cart counter incrementing
3. Theme toggle (light vs dark)
4. Success message notification

---

## 🎓 Short Project Note (6-8 lines)

This React application recreates the Lenskart e-commerce website using 12 components including Header, HeroSlider, ProductSection, and LoginModal. Props are used extensively - Header receives darkTheme and cartCount, ProductCard receives product data, and modal components receive callback functions. State management includes theme toggle (darkTheme), cart counter (cartCount), form validation (email/password errors), slider navigation (currentSlide), and modal visibility (showLoginModal). All seven required features are implemented: button interactions update state and show modals, form validation uses state for error messages, theme toggle changes CSS classes via state, conditional rendering controls modal/message visibility, navigation highlighting uses activeNav state, image slider uses currentSlide index, and localStorage persists theme preference with useEffect. No manual DOM manipulation is used - all UI updates happen through React state changes and re-renders, following proper React architecture principles.

---

## ✅ Assignment Checklist

- [x] Minimum 5 components (12 created)
- [x] Props used (8+ components receive props)
- [x] State + Events (7 features implemented)
- [x] Button interaction (modal, cart, alerts)
- [x] Form validation (Newsletter + Login)
- [x] Theme toggle (state-driven)
- [x] Show/hide (conditional rendering)
- [x] Navigation highlight (active state)
- [x] Image slider (state index)
- [x] localStorage (useEffect bonus)
- [x] No document.getElementById()
- [x] No manual DOM manipulation
- [x] Reference website documented
- [x] README with component explanation

---

## 👨‍💻 Student Information

**Activity:** React Web Application Development  
**Components Created:** 12  
**Features Implemented:** 7/7 (including bonus localStorage)  
**Framework:** React 18.2.0  
**Date:** February 2026

---

## 🔗 Comparison with Activity 2

| Feature | Vanilla JS (Activity 2) | React (Activity 3) |
|---------|------------------------|-------------------|
| DOM Access | `document.getElementById()` | Props + State |
| UI Updates | Manual `.textContent = ` | State triggers re-render |
| Events | `addEventListener()` | `onClick={}` in JSX |
| Visibility | `classList.add('show')` | `{show && <Component />}` |
| Forms | Manual validation | Controlled components |
| Storage | Direct localStorage | useEffect hook |
| Structure | Single file | 12 component files |

---

## 📝 Notes

- All images should be placed in `public/images/` directory
- Font Awesome CDN is loaded in public/index.html
- CSS is identical to Activity 1 (maintained visual consistency)
- State-driven architecture ensures React best practices
- No jQuery or external libraries (pure React)
