# SpaceHind.in - Basic Productivity Tools

A collection of simple productivity tools created by Harsh Jain.

## Tools Included
- **YouTube Transcripts**: Extract and read transcripts from any YouTube video
- **Skip-a-podcast**: Skip silence and filler words in podcast episodes
- **ePub to Printable PDF**: Convert ePub books to printable PDF format

## Technology Stack
- Next.js
- React
- CSS-in-JS (styled-jsx)

## Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
1. Clone this repository:
```bash
git clone https://github.com/yourusername/spacehind-website.git
cd spacehind-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to Vercel

### Steps to Deploy
1. Push your code to a GitHub repository:
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. Sign up or log in to [Vercel](https://vercel.com/)

3. Click "New Project" on your Vercel dashboard

4. Import your GitHub repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

7. Once deployment is complete, your site will be available at a Vercel-provided URL (e.g., `spacehind.vercel.app`)

### Adding a Custom Domain
1. Go to your project settings in Vercel
2. Navigate to the "Domains" section
3. Add your domain (spacehind.in)
4. Follow Vercel's instructions to configure your DNS settings

## Future Improvements
- Implement actual API functionality for the YouTube transcripts tool
- Add backend processing for podcast silence removal
- Create PDF conversion functionality

## License
MIT

## Contact
For any questions or suggestions, please contact me at your-email@example.com
