# QR Code Generator CLI

A simple **Node.js command-line application** that allows users to input a URL and automatically generates a **QR code image** saved locally as `qr.png`.

This project uses:

* **Inquirer** – for interactive user prompts
* **QRCode** – to generate QR code images
* **fs (Filesystem)** – to save the generated QR code to disk

---

## 🔧 Features

* Prompts the user to enter a URL
* Generates a QR code from the input
* Saves the QR code as `qr.png` in the project directory
* Simple and easy-to-use CLI interface

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

2. Install dependencies:

```bash
npm install
```

---

## ▶️ Usage

Run the application with:

```bash
node index.js
```

You will be prompted to enter a URL:

```
? Enter the URL to convert into a QR code:
```

After entering your URL, a file named **`qr.png`** will appear in your project folder.

---

## 📁 Project Structure

```
.
├── index.js
├── package.json
├── package-lock.json
└── qr.png (generated after running)
```

## 🛠️ Technologies Used

* **Node.js**
* **Inquirer.js**
* **qrcode**
* **fs (Node.js filesystem)**

## ✨ Author

Eng. Boniphace Bageme (Dr. Angela's student)
