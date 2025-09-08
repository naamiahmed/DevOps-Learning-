# Modern Auth System - Next.js 13+ with TypeScript

A modern, animated authentication system built with Next.js 13+ App Router, TypeScript, Framer Motion, and Tailwind CSS.

## Features

### 🎨 Modern Design
- Clean, modern black/white/grey theme
- Semi-transparent effects and glass morphism
- Smooth animations with Framer Motion
- Responsive design for mobile and desktop

### 🔐 Authentication
- Sign In and Sign Up forms
- Form validation with Zod and React Hook Form
- Floating label inputs with animated focus effects
- Smooth sliding transitions between forms

### ✨ Animations & Interactions
- Sliding/swiping transitions between Sign In and Sign Up
- 3D tilt effects on cards
- Micro-interactions on buttons and inputs
- Animated loading states
- Decorative animated elements

### 🛠️ Technology Stack
- **Next.js 13+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **Zod** for validation

## Project Structure

```
src/
├── app/
│   ├── auth/
│   │   └── page.tsx          # Auth page
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   └── auth/
│       ├── AuthCard.tsx     # Main auth container
│       ├── SignInForm.tsx   # Sign in form
│       ├── SignUpForm.tsx   # Sign up form
│       ├── FloatingLabelInput.tsx # Custom input component
│       └── index.ts         # Component exports
└── lib/
    └── validation.ts        # Zod validation schemas
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## Pages

### Home Page (`/`)
- Welcome message with smooth animations
- Navigation link to auth page
- Modern dark theme with gradient background
- Decorative animated elements

### Auth Page (`/auth`)
- Centered auth card with glass morphism effect
- Toggle between Sign In and Sign Up
- Smooth sliding animations
- Form validation with real-time feedback
- Floating label inputs with focus animations

## Form Validation

- **Email:** Must be a valid email format
- **Password:** Minimum 6 characters
- **Confirm Password:** Must match the password (Sign Up only)

## Animations

- **Card hover effects:** 3D tilt and scale animations
- **Form transitions:** Smooth slide animations when switching between Sign In/Sign Up
- **Input focus:** Animated floating labels and border effects
- **Button interactions:** Scale and shadow effects on hover/tap
- **Loading states:** Spinning animations during form submission

## Customization

### Colors
The color scheme can be customized in the Tailwind classes:
- Primary background: `from-gray-900 via-black to-gray-800`
- Card background: `bg-black/40`
- Text colors: `text-white`, `text-gray-400`
- Accent color: `bg-white` for buttons

### Animations
Animation timing and effects can be modified in the Framer Motion components:
- Transition durations
- Animation variants
- Hover effects
- Gesture responses

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
