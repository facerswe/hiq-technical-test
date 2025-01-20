const fs = require('fs');

exports.processFile = (req, res) => {
  try {
    const filePath = req.file.path;
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const wordCounts = {};
    const words = fileContent.split(/\W+/);

    words.forEach((word) => {
      if (word) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      }
    });

    const mostUsedWord = Object.keys(wordCounts).reduce((a, b) =>
      wordCounts[a] > wordCounts[b] ? a : b
    );

    const processedText = fileContent.replace(
      new RegExp(`\\b${mostUsedWord}\\b`, 'gi'),
      `foo${mostUsedWord}bar`
    );
    
    res.json({ processedText });
  } catch (err) {
    res.status(500).json({ error: 'File processing failed.' });
  }
};