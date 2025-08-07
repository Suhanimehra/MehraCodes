# MehraCodes Portfolio Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio to various free hosting platforms.

## Table of Contents

1. [Netlify Deployment](#netlify-deployment)
2. [Firebase Deployment](#firebase-deployment)
3. [GitHub Pages Deployment](#github-pages-deployment)
4. [Vercel Deployment](#vercel-deployment)
5. [Troubleshooting](#troubleshooting)

## Netlify Deployment

Netlify offers a generous free tier and is one of the easiest platforms to deploy a React application.

### Option 1: Using the Netlify UI

1. Create an account at [Netlify](https://www.netlify.com/)
2. Click on "New site from Git"
3. Connect to your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Using the Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login to Netlify: `netlify login`
3. Initialize your site: `netlify init`
4. Deploy your site: `npm run deploy:netlify` or `netlify deploy --prod`

## Firebase Deployment

Firebase Hosting provides fast and secure hosting for your web app.

1. Create a Firebase account at [Firebase](https://firebase.google.com/)
2. Install Firebase CLI: `npm install -g firebase-tools`
3. Login to Firebase: `firebase login`
4. Initialize your project: `firebase init`
   - Select "Hosting"
   - Select your Firebase project or create a new one
   - Specify `dist` as your public directory
   - Configure as a single-page app: Yes
5. Deploy your site: `npm run deploy:firebase` or `firebase deploy`

## GitHub Pages Deployment

GitHub Pages is a free hosting service provided by GitHub.

### Automatic Deployment with GitHub Actions

This repository is already configured with GitHub Actions for automatic deployment. When you push to the main branch, your site will be automatically built and deployed to GitHub Pages.

1. Go to your repository settings
2. Navigate to "Pages"
3. Set the source to "GitHub Actions"

### Manual Deployment

1. Build your project: `npm run build`
2. Install gh-pages: `npm install -g gh-pages`
3. Deploy to GitHub Pages: `gh-pages -d dist`

## Vercel Deployment

Vercel is a cloud platform for static sites and serverless functions.

1. Create an account at [Vercel](https://vercel.com/)
2. Install Vercel CLI: `npm install -g vercel`
3. Login to Vercel: `vercel login`
4. Deploy your site: `vercel`

## Troubleshooting

### Routing Issues

If you're experiencing routing issues (404 errors when refreshing or accessing routes directly), make sure:

1. The `_redirects` file is in the `public` directory
2. For Netlify, check that the `netlify.toml` file is in the root directory
3. For Firebase, verify that the `firebase.json` file has the correct rewrites configuration

### Build Errors

If you encounter build errors:

1. Make sure all dependencies are installed: `npm install`
2. Check for any TypeScript errors: `npm run lint`
3. Try clearing the cache: `npm run build -- --force`

### Deployment Script

This repository includes a deployment helper script that can assist with deploying to Netlify or Firebase:

```bash
npm run deploy
```

Follow the prompts to select your deployment target.

---

If you encounter any issues not covered in this guide, please refer to the official documentation of the respective hosting platform or open an issue in the repository.