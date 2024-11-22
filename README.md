# How to Run
- create a project directory on your machine 
- cd into project directory and ```git clone https://github.com/aarushirc14/CPSC481-Project-UConnect.git```
- cd into UConnect root directory
- install Node.js I have v20.18.0 (project currently runs on this version)
- check installs:
    - ```node -v```
    - ```npm -v``` if missing run ```npm install```
- ```npm install vite --save-dev``` to install vite
-  ```npm run dev``` to run app on localhost
- Copy localhost link and paste the link to a Web Browser to see and interact with the app
- Note if you are running app after Darcy's TipTap component is added you may have to do these installs:
    - ```npm install @tiptap/core @tiptap/react @tiptap/starter-kit```
    - ```npm install @tiptap/extension-color @tiptap/extension-underline @tiptap/extension-image @tiptap/extension-link @tiptap/extension-placeholder @tiptap/extension-text-style @tiptap/extension-list-item```
    - ```npm install react-icons```


# App Theme
- Layer 1 dark screen background #000000
- Layer 2 background #414040 used for backgrounds on main content like profiles and posts
- Layer 2 background #1D1C1C used for less emphasized items like Sidebar background
- Layer 3 background #C6C3C3 
- Main text is #FFFFFF or #000000, sub-text is #C6C3C3
- Accent color #FC9D04 used for emphasis, borders and headings and some button backgrounds
- Default React fonts are used. You can adjust bold, semi-bold etc. But no need to change the font.
