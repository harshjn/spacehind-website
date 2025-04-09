import { useState } from 'react';
import Layout from '../components/Layout';

export default function SkipAPodcast() {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === 'audio/mpeg' || selectedFile.type === 'audio/mp4')) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid audio file (MP3 or MP4)');
    }
  };

  const processAudio = (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an audio file');
      return;
    }
    
    setProcessing(true);
    setError('');
    
    // This is a placeholder - in a real implementation, 
    // you would upload the file to a server for processing
    setTimeout(() => {
      setProcessing(false);
      setProcessed(true);
    }, 3000);
  };

  return (
    <Layout title="Skip-a-podcast - SpaceHind.in">
      <div className="container">
        <header className="header">
          <h1>Skip-a-podcast</h1>
          <p>Skip silence and filler words in podcasts to save your time</p>
        </header>

        <div className="tool-content">
          <div className="instructions">
            <h2>How it works</h2>
            <ol>
              <li>Upload your podcast audio file (MP3 or MP4)</li>
              <li>Our algorithm detects and removes silence and common filler words</li>
              <li>Download your optimized podcast and save up to 30% of listening time</li>
            </ol>
          </div>

          <form onSubmit={processAudio} className="upload-form">
            <div className="file-input-container">
              <label className="file-input-label">
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  accept=".mp3,.mp4,audio/*" 
                  className="file-input"
                />
                <span className="file-input-text">
                  {file ? file.name : 'Choose podcast file'}
                </span>
              </label>
              <button 
                type="submit" 
                className="process-btn" 
                disabled={!file || processing}
              >
                {processing ? 'Processing...' : 'Process Podcast'}
              </button>
            </div>

            {error && <div className="error-message">{error}</div>}
            
            {processing && (
              <div className="processing-indicator">
                <div className="spinner"></div>
                <p>Processing your podcast. This may take a few minutes...</p>
              </div>
            )}
            
            {processed && (
              <div className="result-container">
                <div className="success-message">
                  <h3>Processing Complete!</h3>
                  <p>Your optimized podcast is ready for download.</p>
                  <p>Original duration: 45:30 | Optimized duration: 32:15 | 29% time saved</p>
                </div>
                <button className="download-btn">Download Optimized Podcast</button>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .tool-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .instructions {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .instructions h2 {
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }
        
        .instructions ol {
          padding-left: 1.5rem;
        }
        
        .instructions li {
          margin-bottom: 0.5rem;
        }
        
        .upload-form {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .file-input-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .file-input-label {
          flex: 1;
          display: block;
          background-color: #f5f5f5;
          border: 1px dashed #ccc;
          border-radius: 4px;
          padding: 0.75rem;
          cursor: pointer;
          text-align: center;
        }
        
        .file-input-label:hover {
          background-color: #f0f0f0;
        }
        
        .file-input {
          display: none;
        }
        
        .file-input-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
        }
        
        .process-btn {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 0 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .process-btn:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }
        
        .error-message {
          color: var(--accent-color);
          margin-bottom: 1rem;
        }
        
        .processing-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top-color: var(--primary-color);
          animation: spin 1s ease-in-out infinite;
          margin-bottom: 1rem;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .result-container {
          padding: 1.5rem;
          background-color: #f5f5f5;
          border-radius: 8px;
          text-align: center;
        }
        
        .success-message {
          margin-bottom: 1.5rem;
        }
        
        .success-message h3 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }
        
        .download-btn {
          background-color: var(--secondary-color);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .file-input-container {
            flex-direction: column;
          }
          
          .file-input-label {
            margin-bottom: 0.5rem;
          }
          
          .process-btn {
            width: 100%;
            padding: 0.75rem;
          }
        }
      `}</style>
    </Layout>
  );
}
