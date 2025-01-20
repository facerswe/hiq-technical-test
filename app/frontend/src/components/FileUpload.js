import React from 'react';

const FileUpload = ({ setProcessedText }) => {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setProcessedText(data.processedText);
  };

  return (
    <div>
      <h2>Upload your file</h2>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;