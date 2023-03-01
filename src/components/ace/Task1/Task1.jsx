import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import { Box, Typography, Button } from '@mui/material';

const Task1 = () => {
  const [editorValue, setEditorValue] = useState('<html>\n<head>\n<title>Hello World!</title>\n</head>\n<body>\n<h1>Hello World!</h1>\n<h1>Movies</h1>\n<h2>My Top 3 Movies:</h2>\n<ol>\n<li>Amadeus</li>\n<li>Stand By Me</li>\n<li>Amelie</li></ol>\n<h2>Other Good Movies:</h2>\n<ul>\n<li>Alien</li>\n<li>Parasite</li>\n<li>Annie Hall</li>\n</ul>\n</body>\n</html>');

  const onEditorChange = (newValue) => {
    setEditorValue(newValue);
  };

  const onTestClick = () => {
    const iframe = document.getElementById('test-output');
    iframe.srcdoc = editorValue;
  };

  return (
    <Box sx={{ p: '16px'
  }}>
    <Typography variant="h1" component="h1" sx={{  padding: '16px' }}>HTML</Typography>
    <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>Description</Typography>
<Typography variant="body1">Favorite Movies Exercises
It's time to practice working with ordered and unordered lists.  In the index.html file, you will find some existing markup.  Please add on to the markup to recreate the two lists in the following image. </Typography>
    <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>Your Solution</Typography>
      <AceEditor
        mode="html"
        theme="github"
        name="html-editor"
        width="100%"
        height="500px"
        value={editorValue}
        onChange={onEditorChange}
        sx={{ marginBottom: '16px' }}
      />
      <Button variant="contained"  sx={{ margin: { xs: '16px', md: '32px' } }} onClick={onTestClick}>Test</Button>
    
      <iframe id="test-output" title="Test Output" width="100%" height="500px"></iframe>
    
    </Box>
  );
};

export default Task1;
