# Codex Neural - Final Deployment Guide

## 1. Local Verification
Ensure the latest build passes locally:
```bash
npm run build
npm start
```
Check `http://localhost:3000` to verify the new "NeuralAI" aesthetic (Horizontal Scroll, Grid Background).

## 2. Push to GitHub
Initialize and push the code:
```bash
git init
git add .
git commit -m "Final Release: NeuralAI Redesign"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## 3. Deploy to Vercel
1. Go to your Vercel Dashboard.
2. Import the repository.
3. Framework Preset: **Next.js**.
4. Root Directory: `./`
5. **Deploy**.

## 4. Post-Launch Verification
- **Desktop**: Check the "Sticky Scroll" in Services. It should feel smooth.
- **Mobile**: Verify the Service cards are swipeable or stack vertically (responsiveness is handled via Tailwind).
- **SEO**: Visit `/sitemap.xml` on the live domain.

## 5. Maintenance
- To update content, edit the constants in `src/constants/` or the individual page files.
- To adjust the "Glow" intensity, modify `.animate-blob` opacity in `globals.css`.
