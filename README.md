# Project Title: [Inferred Product/Service Name] - Landing Page

This project is a modern, responsive landing page built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS. It appears to be designed to showcase a product or service, with sections for features, problem/solution, integrations, customer trust, and calls to action.

## Project info

**Lovable Project URL**: https://lovable.dev/projects/f2858bde-640b-4ebd-a5de-98106403ddde

This project was generated and is managed by Lovable.

## Application Structure

The main application is structured as follows:

- **`src/main.tsx`**: The entry point of the application.
- **`src/App.tsx`**: The main application component, which sets up routing and global providers.
- **`src/pages/`**: Contains the different pages of the application.
    - **`Index.tsx`**: The main landing page, likely composed of various sections.
    - **`DemoCall.tsx`**: A page for scheduling or requesting a demo.
    - **`NotFound.tsx`**: A catch-all page for invalid URLs.
- **`src/components/`**: Contains reusable UI components.
    - **`sections/` (inferred)**: Based on component names like `HeroSection.tsx`, `FeaturesSection.tsx`, etc., it's likely these components represent different sections of the landing page.
    - **`ui/`**: Contains shadcn-ui components.
- **`public/`**: Contains static assets like images and icons.

## Key Features (Inferred from Components)

- **Hero Section**: Introduces the product/service.
- **Features Section**: Highlights key features.
- **Problem/Solution Section**: Addresses customer pain points and offers solutions.
- **Integrations Section**: Showcases compatibility with other tools/services.
- **Before & After Section**: Demonstrates the impact or benefits.
- **Process Section**: Explains how the product/service works.
- **Trust Section**: Builds credibility (e.g., testimonials, client logos).
- **Final CTA Section**: Encourages user action (e.g., sign up, contact).

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f2858bde-640b-4ebd-a5de-98106403ddde) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL> # Replace <YOUR_GIT_URL> with the actual Git URL

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME> # Replace <YOUR_PROJECT_NAME> with the actual project name

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```
The application will typically be available at `http://localhost:5173` (or another port if 5173 is busy).

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port indicated in your terminal) to view it in the browser. The page will reload if you make edits.
- **`npm run build`**: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- **`npm run build:dev`**: Builds the app for development to the `dist` folder.
- **`npm run lint`**: Lints the project files using ESLint.
- **`npm run preview`**: Serves the production build locally for preview.

## What technologies are used for this project?

This project is built with:

- **Vite**: A fast build tool and development server.
- **TypeScript**: A statically typed superset of JavaScript.
- **React**: A JavaScript library for building user interfaces.
- **shadcn-ui**: A collection of re-usable UI components.
- **Tailwind CSS**: A utility-first CSS framework.
- **React Router DOM**: For client-side routing.
- **TanStack Query**: For data fetching and state management.
- **ESLint**: For code linting.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f2858bde-640b-4ebd-a5de-98106403ddde) and click on Share -> Publish.

Alternatively, since this is a standard Vite React application, you can deploy the contents of the `dist` folder (after running `npm run build`) to any static site hosting provider (e.g., Vercel, Netlify, GitHub Pages).

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
