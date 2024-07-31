# MERN BLOG

MERN 스택은 MongoDB, Express.js, React, Node.js를 사용하여 풀스택 웹 애플리케이션을 개발하는 기술 스택을 의미합니다. 여기서는 MERN 스택을 사용하여 블로그 애플리케이션을 구축하는 방법을 설명하겠습니다.

vite(https://ko.vitejs.dev/guide/)
tailwindcss(https://tailwindcss.com/docs/guide/)
mongodb(https://www.mongodb.com/)
insomnia(https://insomnia.rest/)
redux-toolkit(https://redux-toolkit.js.org/)

VITE를 이용하여 리액트를 설치합니다.

````bash
npm create vite@latest
cd client
npm install
npm run dev
````

````bash
npm i react-router-dom
npm i react-icons

npm install @reduxjs/toolkit
npm install react-redux
npm i redux-persist

npm install firebase
````

````
Project name: client
√ Select a framework: » React
√ Select a variant: » JavaScript + SWC
````

## tailwind 설치(client)

````
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
````

## GIT 연동

````
git init
git add .
git commit -m "first"
git remote add origin https://github.com/gnlgk/mern-blog-test.git
git branch -M main
git push -u origin main
````

````bash
npm init -y
npm i express
npm i nodemon
npm i mongoose

npm i dotenv
npm i bcryptjs
npm i jsonwebtoken
````

````
node api/index.js
package.json ++"type": "module",
package.json ++"scripts": {
    "dev": "nodemon api/index.js",
    "start": "node api/index.js"}
````

vite는 cors에러 알아서 처리
code 8000 비번틀림