# Gamification Reward System

A premium, interactive reward configuration system built with React, TypeScript, and Vite. This project features a highly polished user interface designed for setting up complex reward triggers and incentives.

## 🛠️ Tech Stack

- **Framework**: [React 18]
- **Build Tool**: [Vite]
- **Styling**: [Tailwind CSS]

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
