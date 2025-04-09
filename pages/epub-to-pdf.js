import { useState } from 'react';
import Layout from '../components/Layout';

export default function EpubToPdf() {
  const [file, setFile] = useState(null);
  const [options, setOptions] = useState({
    pageSize: 'a4',
    margin: 'normal',
    fontSize: 'medium',
    includeToc: true,
    includeImages: true,
  });
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.toLowerCase().endsWith('.epub')) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid ePub file');
    }
  };

  const handleOptionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOptions({
      ...options,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const convertFile = (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an ePub file');
      return;
    }
    
    setConverting(true);
    setError('');
    
    // This is a placeholder - in a real implementation, 
    // you would upload the file to a server for conversion
    setTimeout(() => {
      setConverting(false);
      setConverted(true);
    }, 3000);
  };

  return (
    <Layout title="ePub to Printable PDF - SpaceHind.in">
      <div className="container">
        <header className="header">
          <h1>ePub to Printable PDF</h1>
          <p>Convert your ePub books to printable PDF format with customizable layouts</p>
        </header>

        <div className="tool-content">
          <form onSubmit={convertFile} className="conversion-form">
            <div className="form-section">
              <h2>Upload ePub File</h2>
              <div className="file-input-container">
                <label className="file-input-label">
                  <input 
                    type="file" 
                    onChange={handleFileChange} 
                    accept=".epub" 
                    className="file-input"
                  />
                  <span className="file-input-text">
                    {file ? file.name : 'Choose ePub file'}
                  </span>
                </label>
              </div>
            </div>

            <div className="form-section">
              <h2>Conversion Options</h2>
              
              <div className="option-group">
                <label>Page Size:</label>
                <select 
                  name="pageSize" 
                  value={options.pageSize}
                  onChange={handleOptionChange}
                >
                  <option value="a4">A4</option>
                  <option value="letter">Letter</option>
                  <option value="a5">A5 (Booklet)</option>
                  <option value="b5">B5</option>
                </select>
              </div>
              
              <div className="option-group">
                <label>Margins:</label>
                <select 
                  name="margin" 
                  value={options.margin}
                  onChange={handleOptionChange}
                >
                  <option value="small">Small</option>
                  <option value="normal">Normal</option>
                  <option value="large">Large</option>
                  <option value="binding">Binding (for double-sided)</option>
                </select>
              </div>
              
              <div className="option-group">
                <label>Font Size:</label>
                <select 
                  name="fontSize" 
                  value={options.fontSize}
                  onChange={handleOptionChange}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xlarge">Extra Large</option>
                </select>
              </div>
              
              <div className="option-group checkbox">
                <label>
                  <input 
                    type="checkbox" 
                    name="includeToc" 
                    checked={options.includeToc}
                    onChange={handleOptionChange}
                  />
                  Include Table of Contents
                </label>
              </div>
              
              <div className="option-group checkbox">
                <label>
                  <input 
                    type="checkbox" 
                    name="includeImages" 
                    checked={options.includeImages}
                    onChange={handleOptionChange}
                  />
                  Include Images
                </label>
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}
            
            <div className="form-actions">
              <button 
                type="submit" 
                className="convert-btn" 
                disabled={!file || converting}
              >
                {converting ? 'Converting...' : 'Convert to PDF'}
              </button>
            </div>
            
            {converting && (
              <div className="processing-indicator">
                <div className="spinner"></div>
                <p>Converting your ePub to PDF. This may take a few moments...</p>
              </div>
            )}
            
            {converted && (
              <div className="result-container">
                <div className="success-message">
                  <h3>Conversion Complete!</h3>
                  <p>Your printable PDF is ready for download.</p>
                </div>
                <button className="download-btn">Download PDF</button>
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
        
        .conversion-form {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .form-section {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
        }
        
        .form-section h2 {
          margin-bottom: 1rem;
          color: var(--secondary-color);
          font-size: 1.25rem;
        }
        
        .file-input-container {
          margin-bottom: 1rem;
        }
        
        .file-input-label {
          display: block;
          background-color: #f5f5f5;
          border: 1px dashed #ccc;
          border-radius: 4px;
          padding: 1rem;
          cursor: pointer;
          text-align: center;
        }
        
        .file-input-label:hover {
          background-color: #f0f0f0;
        }
        
        .file-input {
          display: none;
        }
        
        .option-group {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .option-group label {
          width: 150px;
          flex-shrink: 0;
        }
        
        .option-group select {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: #fff;
        }
        
        .option-group.checkbox {
          margin-left: 150px;
        }
        
        .option-group.checkbox label {
          display: flex;
          align-items: center;
          width: auto;
        }
        
        .option-group.checkbox input {
          margin-right: 0.5rem;
        }
        
        .error-message {
          color: var(--accent-color);
          margin-bottom: 1rem;
        }
        
        .form-actions {
          text-align: center;
        }
        
        .convert-btn {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          font-size: 1rem;
        }
        
        .convert-btn:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }
        
        .processing-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          margin-top: 1.5rem;
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
          margin-top: 1.5rem;
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
          .option-group {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .option-group label {
            margin-bottom: 0.5rem;
          }
          
          .option-group select {
            width: 100%;
          }
          
          .option-group.checkbox {
            margin-left: 0;
          }
        }
      `}</style>
    </Layout>
  );
}
