import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import { Box, Typography, Button } from '@mui/material';
import TestResults from "./TestResults";


const Task1 = () => {
  const [editorValue, setEditorValue] = useState('');
  const [tests, setTests] = useState([]);

  const onEditorChange = (newValue) => {
    setEditorValue(newValue);
  };

  const onTestClick = () => {
    const iframe = document.getElementById('test-output');
    iframe.srcdoc = editorValue;
  };


  function runTests() {
    const h1Regex = /<h1>Hello World<\/h1>/;
    const pRegex =  /<p>Welcome to React<\/p>/;
    
    const h1Passed = h1Regex.test(editorValue);
    const pPassed = pRegex.test(editorValue);
  
    const tests = [
      {
        name: "Contains <h1>Hello World</h1>",
        passed: h1Passed,
        error: h1Passed ? "" : "Expected <h1>Hello World</h1> tag was not found",
      },
      {
        name: "Contains <p>Welcome to React</p>",
        passed: pPassed,
        error: pPassed ? "" :  "Expected <p>Welcome to React</p> tag was not found"
      },
    ];
  
    setTests(tests);
  }
  
  return (
  <Box sx={{ p: '16px', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
  <Box sx={{ flex: '1', padding: '16px' }}>
    <Typography variant="h1" component="h1" sx={{ padding: '16px' }}>HTML</Typography>
    <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>Description</Typography>
    <Typography variant="body1">Create a web page with an h1 tag that says 'Hello World' and a p tag that says 'Welcome to React'",
    </Typography>
    <TestResults tests={tests} /> / 
  </Box>
  <Box sx={{ flex: '1', padding: '16px' }}>
    <Typography variant="h6" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>WRITE YOUR CODE HERE</Typography>
    <AceEditor
      mode="html"
      theme="github"
      name="html-editor"
      width="100%"
      height="400px"
      editorProps={{ $blockScrolling: true }}
      value={editorValue}
      onChange={onEditorChange}
      sx={{ marginBottom: '16px', bgcolor: 'gray', color: 'white' , fontSize: '120px'  }}
    />
  </Box>
  
  <Box sx={{ flex: '1', padding: '16px', display: {  md: 'block' } }}>
  <Typography variant="h6" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>YOUR RESULT</Typography>

    <iframe id="test-output" title="Test Output" width="100%" height="420px" style={{ backgroundColor: 'darkgray' }}></iframe>
    <Button variant="contained" sx={{ m: 1,  }} onClick={onTestClick}>SEE RESULT</Button>
    <Button variant="contained" onClick={runTests}>Run Tests</Button>
   </Box>
</Box>
  );
};

export default Task1;
