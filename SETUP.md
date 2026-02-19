# Setup Instructions for Lenskart React Application

## Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Step-by-Step Setup

### 1. Extract/Download the Project
```bash
# If you have a zip file, extract it first
unzip lenskart-react.zip
cd lenskart-react
```

### 2. Copy Images Folder
**IMPORTANT:** Copy your `images` folder from the original project into the `public` directory:

```
lenskart-react/
└── public/
    └── images/
        ├── logo.png
        ├── hero/
        │   ├── slide1.png
        │   ├── slide2.png
        │   └── slide3.png
        ├── categories/
        │   ├── eyeglasses.png
        │   ├── sunglasses.png
        │   ├── computer.png
        │   └── lenses.png
        ├── products/
        │   ├── p1.png through p8.png
        └── brands/
            ├── vincent.png
            ├── johnjacobs.png
            ├── aqualens.png
            ├── air.png
            ├── hustlr.png
            └── hooper.png
```

### 3. Install Dependencies
```bash
npm install
```

This will install:
- react (^18.2.0)
- react-dom (^18.2.0)
- react-scripts (5.0.1)

### 4. Start Development Server
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### 5. Build for Production (Optional)
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

## Troubleshooting

### Issue: Images not loading
**Solution:** Make sure images folder is in `public/images/` directory

### Issue: npm install fails
**Solution:** 
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Try installing again
npm install
```

### Issue: Port 3000 already in use
**Solution:**
```bash
# Run on different port
PORT=3001 npm start
```

---

## Testing the Application

### Test Checklist:

1. ✅ **Theme Toggle**
   - Click moon/sun icon in header
   - Verify theme changes
   - Refresh page - theme should persist

2. ✅ **Login Modal**
   - Click "Account" in header
   - Try submitting empty form - see errors
   - Try invalid email - see error
   - Enter valid credentials - modal closes with success message

3. ✅ **Newsletter Form**
   - Scroll to newsletter section
   - Try empty email - see error
   - Try invalid email - see error
   - Enter valid email - see success message

4. ✅ **Add to Cart**
   - Click "Buy Now" on any product
   - Button changes to "Added!" with green color
   - Cart counter increments
   - Success message appears

5. ✅ **Hero Slider**
   - Wait 5 seconds - slides auto-advance
   - Click arrows - slides change
   - Click dots - jumps to specific slide

6. ✅ **Navigation**
   - Click nav links - smooth scroll
   - Active link gets highlighted
   - Scroll page - header shadow changes

7. ✅ **Wishlist Toggle**
   - Click heart icon on products
   - Icon changes from outline to filled
   - Click again - toggles back

---

## File Structure Overview

```
lenskart-react/
├── public/
│   ├── index.html          # HTML template
│   └── images/             # YOUR IMAGES HERE
├── src/
│   ├── components/         # All React components
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
│   ├── App.js              # Main app component
│   ├── App.css             # All styles
│   ├── index.js            # React entry point
│   └── index.css           # Base styles
├── package.json            # Dependencies
├── README.md              # Project documentation
└── .gitignore             # Git ignore rules
```

---

## Screenshots to Take

### For Submission:

1. **Desktop View - Homepage**
   - Full page showing all sections
   - Light theme

2. **Desktop View - Dark Theme**
   - Same page with dark theme enabled

3. **Mobile View**
   - Responsive layout on phone screen
   - Can use Chrome DevTools (F12 → Toggle Device Toolbar)

4. **Interaction 1: Login Modal**
   - Modal open with validation errors showing

5. **Interaction 2: Cart Counter**
   - Before and after clicking "Buy Now"
   - Show cart count increasing

6. **Interaction 3: Success Message**
   - Notification appearing after action

---

## Submitting the Project

### Option 1: ZIP File
```bash
# From project directory
npm run build  # Optional: create production build
cd ..
zip -r lenskart-react.zip lenskart-react -x "*/node_modules/*" "*/.git/*"
```

### Option 2: GitHub
```bash
git init
git add .
git commit -m "Initial commit - Lenskart React App"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

**Note:** Don't upload node_modules (it's in .gitignore)

---

## What to Submit

1. ✅ Project files (ZIP or GitHub link)
2. ✅ Screenshots (at least 6):
   - Desktop view
   - Mobile view
   - 2+ interactions
3. ✅ Short note (6-8 lines) - see README.md
4. ✅ README.md with components/features explanation

---

## Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Support

If you encounter any issues:
1. Check console for errors (F12 → Console tab)
2. Verify images are in correct location
3. Ensure all dependencies are installed
4. Check that Node.js version is 14+

---

Good luck with your submission! 🚀
