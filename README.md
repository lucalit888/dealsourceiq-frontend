# DealSourceIQ Frontend

<img width="1056" alt="Screenshot 2025-02-09 at 2 46 41 PM" src="https://github.com/user-attachments/assets/09c9656e-044e-480e-b896-7cd392e8c3cb" />

**[DealSourceIQ](https://graceful-lily-43da2a.netlify.app/)** is a web application prototype designed for private equity firms to search for acquisition targets, analyze company data, and save search filters. The eventual goal is to automate creation of email templates, and enable reach outs directly through the UI. Built with React, TypeScript, and TailwindCSS, it integrates seamlessly with Supabase for backend services and Vite for fast development.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [File Structure](#file-structure)
5. [Deployment](#deployment)
6. [License](#license)

---

## Features
 
- **Search Page**: Enter natural language queries and search for desired acquisition targets.
- **Company Profiles**: View and edit detailed company information.
- **Supabase Integration**: For authentication and database operations. (In Progress)
- **Saved Searches**: Save and manage search filters for efficiency (In Progress)
- **Analytics Dashboard**: Visualize and manage data effectively (In Progress)
---

## Tech Stack

### Frontend

- **React** with **TypeScript**
- **Tailwind CSS**

### Backend

- **Supabase**: Temporary.

### Build Tool

- **Vite**

### Other Tools

- **Node.js & npm**

---

## Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (or **yarn**) installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dealsource.git
   cd dealsource
   ```

2. **Installation**
    ```bash
    npm install
    ```

    **To start development server**:
    ```bash
    npm run dev
    ```

    **To build for production:**
    ```bash
    npm run build
    ```

    This generates a dist/ folder with the following structure:
    ```
    dealsourceiq-frontend/
    ├── dist/                   # Compiled production files
    ├── src/                    # Source code
    │   ├── components/         # Reusable components
    │   │   ├── analytics/      # Analytics-related components
    │   │   ├── company/        # Company-related components
    │   │   ├── saved/          # Saved search components
    │   │   └── ui/             # Common UI components (buttons, inputs, etc.)
    │   ├── lib/                # Utility functions
    │   ├── App.tsx             # Main application component
    │   ├── main.tsx            # Application entry point
    │   ├── index.css           # Global styles
    ├── supabase/               # Supabase configurations
    ├── index.html              # Main HTML file
    ├── tailwind.config.js      # TailwindCSS configuration
    ├── vite.config.ts          # Vite configuration
    ├── package.json            # Project metadata and scripts
    └── tsconfig.json           # TypeScript configuration
    ```

    Subsequently, deploy to Netlify programatically, or via the Netlify Dashboard.
