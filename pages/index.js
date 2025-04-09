import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const tools = [
    {
      id: 'youtube-transcripts',
      title: 'YouTube Transcripts',
      description: 'Extract and read transcripts from any YouTube video by simply pasting the URL.',
      path: '/youtube-transcripts',
    },
    {
      id: 'skip-a-podcast',
      title: 'Skip-a-podcast',
      description: 'Automatically skip silence and filler words in podcast episodes to save your time.',
      path: '/skip-a-podcast',
    },
    {
      id: 'epub-to-pdf',
      title: 'ePub to Printable PDF',
      description: 'Convert your ePub books to printable PDF format with customizable layouts.',
      path: '/epub-to-pdf',
    },
  ];

  return (
    <Layout title="SpaceHind.in - Basic Productivity Tools">
      <div className="container">
        <header className="header">
          <h1>Basic Productivity Tools</h1>
          <p>by Harsh Jain</p>
        </header>

        <div className="tools-container">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-card">
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <Link href={tool.path} className="button">
                Try it now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
