# p5.js Sketch Starter Template

A minimal starter template for **p5.js** sketches, including a **live-reload server** for quick development. This template allows you to quickly start building your p5.js sketches with live-reload functionality, so changes are instantly reflected in the browser as you work.

---

## Getting Started

### 💡 Recommended: Create from Template

````markdown
Use this repository as a [GitHub Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) to start a new sketch with a clean git history:

1. Click the **"Use this template"** button on GitHub.
2. Create your new repository.
3. Clone your new repository locally:
   ```bash
   git clone git@github.com:your-username/my-new-sketch.git
   ```
````

Alternatively, if you use the GitHub CLI:

```bash
gh repo create my-new-sketch --template=ezra-ramatong/p5js-starter --public
git clone git@github.com:your-username/my-new-sketch.git
```

This creates the repo on GitHub and then clones it to your local machine.

---

### **Install dependencies**:

You'll need **Node.js** installed to run the live-reload server.

```bash
npm install
```

### **Start the live-reload server**:

Run the following command to start the server:

```bash
npm start
```

The server will start, and you can view your sketch at `http://localhost:3000`.

---

## Project Structure

```
.
├── jsconfig.json      # JavaScript configuration for editor and IntelliSense
├── package.json       # Node.js dependencies and scripts
├── server.js          # Live-reload server
└── sketch/             # Folder containing your p5.js sketch
    ├── index.html     # HTML file that includes p5.js and your sketch
    ├── sketch.js      # Your p5.js sketch logic
    └── style.css      # Custom styles for your sketch
```

---

## Deployment

Once you're happy with your sketch, deploy it to platforms like **Netlify** or **Vercel**.

- **Netlify**: Push your project to GitHub and link it with Netlify. Set `sketch/` as the **publish directory**.
- **Vercel**: Similar to Netlify, link your GitHub repo to Vercel and deploy.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
