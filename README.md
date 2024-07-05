<!-- Banner Image, Landing Page Of Computer Vision Site -->
<div align="center">
  <br />
    <a href="">
      <img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/AddressBookBanner.png?alt=media&token=ac86dd28-b7b4-4214-a798-b172710a80de" alt="Project Banner">
    
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/node-js?style=for-the-badge&logo=nodedotjs&logoColor=white&label=Node%20JS" alt="Node JS" />
    <img src="https://img.shields.io/badge/mongodb-purple?style=for-the-badge&logo=mongodb&logoColor=white&color=%2347A248" alt="Mongo DB" />
    
    
  </div>

  <h1 align="center">Address Book</h1>

   <div align="center">
     <h4>A simple address book.</h4>
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. ⚙️ [Hardware Output](#hardwareoutput)

## 🚨 About

This is a simple address book that allows you to add, edit, and delete contacts. Tuturial to build this is available on react router's website.

## <a name="introduction">🤖 Introduction</a>

...

## <a name="tech-stack">⚙️ Tech Stack</a>

- React - for the front end
- Nodoe JS - for the server
- Mongo DB - as the database
- React Router - for navigating between pages api calls

## <a name="features">🔋 Features</a>

👉 **Home Screen**:

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/AddressBookHome.png?alt=media&token=84813977-b6d6-4cd7-8ab8-6b8804fee248" alt="Home">

👉 **Create/Edit Contacts**:

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/AddressBookCreateContact.png?alt=media&token=d51b551b-09ca-486b-b5d0-6fe6f81f9089" alt="Create Contact">

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/vroymv/Address-Book.git
cd address-book-take-2
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
cd Client
```

```bash
npm run dev
```

Open a new terminal

```bash
cd Server
```

```bash
nodemon app.js
```

## <a name="snippets">🕸️ Snippets</a>

**Modify the following In your Code**

<details>
<summary><code>Server/app.js</code></summary>
Replace process.env.MONGO_URL with your mongo db connection string

```javascript
//Mongoose DB connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  // posts = await Blog.find();
}
```

</details>

## <a name="links">🔗 Links</a>

...

## <a name="more">🚀 More</a>

...
