# Phone Number Numpad

A simple web application with a numpad interface for entering phone numbers and redirecting to WhatsApp.

## Features

- Interactive numpad for phone number input
- Clear and backspace functionality
- Automatic redirect to WhatsApp with +852 prefix
- Responsive design for mobile and desktop

## GitHub Pages Deployment

This project is ready to be deployed on GitHub Pages. Follow these steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tomchan212/WhatsApps.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Alternative: Use GitHub Actions (if branch deployment doesn't work):**
   - If deploying from a branch doesn't work, you can use GitHub Actions
   - The workflow file is already created (`.github/workflows/deploy.yml`)
   - Just push your code and GitHub Actions will automatically deploy it

Your site will be available at: `https://tomchan212.github.io/WhatsApps/`

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and layout
- `script.js` - Numpad functionality and redirect logic

## Usage

1. Open `index.html` in a web browser
2. Use the numpad to enter a phone number
3. Click "submit" to redirect to WhatsApp with the entered number
