# Gamification Reward System

A premium, interactive reward configuration system built with React, TypeScript, and Vite. This project features a highly polished user interface designed for setting up complex reward triggers and incentives.

## 🚀 Key Features

- **Premium UI/UX**: A modern, fuchsia-themed design with smooth animations and micro-interactions.
- **Dynamic Configuration**: Support for multiple reward types, including:
  - Currency-based goals (e.g., "Cross $100 in sales").
  - Content-based goals (e.g., "Post 5 times every 1 month").
  - Onboarding milestones.
- **Advanced Date Picker**: A high-performance calendar built with `react-day-picker` v9 and `Radix UI Popover`, featuring:
  - Vibrant fuchsia selection states.
  - Boxed navigation controls.
  - Strict date restrictions (tomorrow-minimum).
- **Responsive Modal**: A portal-based modal implementation that handles overflow gracefully across all screen sizes.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components & Hooks**:
  - [@radix-ui/react-popover](https://www.radix-ui.com/primitives/docs/components/popover)
  - [react-day-picker](https://react-day-picker.js.org/) (v9)
  - [lucide-react](https://lucide.dev/)
  - [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rainadwivedi2807/gamification.git
   cd gamification
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Core button component with variants
│   ├── Calendar.tsx     # Specialized DayPicker implementation
│   ├── DatePicker.tsx   # Popover-based date selection
│   ├── Dropdown.tsx     # Dynamic configuration dropdown
│   └── Modal.tsx        # Main Reward Configuration Modal
├── hooks/               # Custom React hooks
│   └── useTooltip.ts    # Tooltip visibility logic
└── App.tsx              # Main application entry
```

## 🧩 Conditional Logic

The system includes built-in business rules:
- Selecting **"Is Onboarded"** as a reward event will automatically disable the **"Upgrade to commission"** reward type to ensure logical parity in configuration.

---

Built with ❤️ for a seamless admin experience.
