# Setup EduWeb
  - Frontend
    # 1.Create Frontend Project
      - npm create vite@latest
    # 2.Add Tailwind and its configuration
      - npm install -D tailwindcss postcss autoprefixer

      - npx tailwindcss init -p
    # 3.Edit tsconfig.json file
        - Add the following code to the tsconfig.json file to resolve paths:
        - {
            "compilerOptions": {
              // ...
              "baseUrl": ".",
              "paths": {
              "@/*": [
              "./src/*"
                ]
              }
              // ...
            }
          }
    # 4.Update vite.config.ts
        - Add the following code to the vite.config.ts so your app can resolve paths without error
        - # (so you can import "path" without error)
        - npm i -D @types/node

        - import path from "path"
        - import react from "@vitejs/plugin-react"
          import { defineConfig } from "vite"

          export default defineConfig({
            plugins: [react()],
            resolve: {
              alias: {
                "@": path.resolve(__dirname, "./src"),
              },
            },
          })
    # 5. Run the shadcn-ui init command to setup  your project:
        - npx shadcn-ui@latest init

    # 6. Configure components.json
          - Would you like to use TypeScript (recommended)? no / yes
          - Which style would you like to use? › New York
          - Which color would you like to use as base color? › Slate
          - Where is your global CSS file? › › src/global.css
            Do you want to use CSS variables for colors? ›  yes
            Where is your tailwind.config.js located? › tailwind.config.js
            Configure the import alias for components: › @/components
            Configure the import alias for utils: › @/lib/utils
            Are you using React Server Components? › no 

    # Created AppRoute(react-router-dom)
    # Create Layout & Header
    # Create MobileNav For Resposiveness(using Shadcn Sheet)
      - npx shadcn-ui@latest add sheet
    # Pages
      - Home
      - About 
      - Course
      - Blog
      - Contact 
    # Auth0
      - npm install @auth0/auth0-react
    # Created AuthProvider
      - AuthProviderNavigate.tsx
    # DropDown Menu(Shadcn) 
      - npx shadcn-ui@latest add dropdown-menu
  # Backend
      - init npm "npm init -y"
      - intall express command "npm i express cors dotenv mongodb mongoose"







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
