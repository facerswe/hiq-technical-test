import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ProcessedText from './components/ProcessedText';

const App = () => {
  const [processedText, setProcessedText] = useState('');

  return (
    <div>
      <h1>File Processing App</h1>
      <FileUpload setProcessedText={setProcessedText} />
      <ProcessedText processedText={processedText} />
    </div>
  );
};

export default App;