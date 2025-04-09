import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'SpaceHind.in' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Basic productivity tools by Harsh Jain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            SpaceHind.in
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/youtube-transcripts" className="nav-link">
              YouTube Transcripts
            </Link>
            <Link href="/skip-a-podcast" className="nav-link">
              Skip-a-podcast
            </Link>
            <Link href="/epub-to-pdf" className="nav-link">
              ePub to PDF
            </Link>
          </div>
        </div>
      </nav>
      
      <main>
        {children}
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SpaceHind.in | Created by Harsh Jain</p>
        </div>
      </footer>

      <style jsx>{`
        .navbar {
          background-color: var(--secondary-color);
          padding: 1rem 0;
          color: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: white;
          transition: opacity 0.3s ease;
        }
        
        .nav-link:hover {
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            gap: 1rem;
          }
          
          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
