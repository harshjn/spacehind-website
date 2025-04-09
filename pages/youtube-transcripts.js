import { useState } from 'react';
import Layout from '../components/Layout';

export default function YouTubeTranscripts() {
  const [url, setUrl] = useState('');
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTranscript = async (e) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a YouTube URL');
      return;
    }
    
    setLoading(true);
    setError('');
    setTranscript('');
    
    // This is a placeholder - in a real implementation, 
    // you would call an API endpoint to get the transcript
    setTimeout(() => {
      // Simulating API response
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        setTranscript("This is a placeholder transcript. In the actual implementation, this would be the real transcript from the YouTube video you provided.\n\nThe transcript would appear here with proper formatting, timestamps, and full content from the video.\n\nYou would need to implement the actual API call to fetch the YouTube transcript using a library like youtube-transcript-api.");
        setLoading(false);
      } else {
        setError('Please enter a valid YouTube URL');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <Layout title="YouTube Transcripts - SpaceHind.in">
      <div className="container">
        <header className="header">
          <h1>YouTube Transcripts</h1>
          <p>Extract the full transcript from any YouTube video</p>
        </header>

        <div className="tool-content">
          <form onSubmit={fetchTranscript} className="input-form">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube URL here (e.g., https://www.youtube.com/watch?v=...)"
              className="url-input"
            />
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Getting transcript...' : 'Get Transcript'}
            </button>
          </form>

          {error && <div className="error-message">{error}</div>}

          {transcript && (
            <div className="transcript-container">
              <h2>Video Transcript</h2>
              <div className="transcript-content">
                {transcript.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="transcript-actions">
                <button className="action-btn">Copy to Clipboard</button>
                <button className="action-btn">Download as Text</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .tool-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .input-form {
          display: flex;
          margin-bottom: 2rem;
        }
        
        .url-input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .submit-btn {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 0 1.5rem;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          font-weight: 500;
        }
        
        .submit-btn:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }
        
        .error-message {
          color: var(--accent-color);
          margin-bottom: 1rem;
        }
        
        .transcript-container {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .transcript-container h2 {
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }
        
        .transcript-content {
          max-height: 400px;
          overflow-y: auto;
          padding: 1rem;
          background-color: #f9f9f9;
          border-radius: 4px;
          margin-bottom: 1rem;
          white-space: pre-wrap;
        }
        
        .transcript-content p {
          margin-bottom: 0.5rem;
        }
        
        .transcript-actions {
          display: flex;
          gap: 1rem;
        }
        
        .action-btn {
          background-color: var(--secondary-color);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .input-form {
            flex-direction: column;
          }
          
          .url-input {
            border-radius: 4px;
            margin-bottom: 0.5rem;
          }
          
          .submit-btn {
            border-radius: 4px;
            padding: 0.75rem;
          }
          
          .transcript-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}
