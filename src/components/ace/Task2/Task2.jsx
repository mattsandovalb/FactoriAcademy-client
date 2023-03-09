import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-github';
import { Box, Typography, Button } from '@mui/material';

import TestResult from "../TestResult/TestResult";

const Task2 = () => {
  const [editorValue, setEditorValue] = useState('');
  const [tests, setTests] = useState([]);

  const onEditorChange = (newValue) => {
    setEditorValue(newValue);
  };

 
  const onTestClick = () => {
    const iframe = document.getElementById('test-output');
    iframe.srcdoc = editorValue;
  };

  const runTests = () => {
    const divRegex = /<div.*?>/s;
    const bgColorRegex = /background-color:\s*red;/s;
    const widthRegex = /width:\s*100px;/s;
    const heightRegex = /height:\s*100px;/s;

    const divPassed = divRegex.test(`<div style="${editorValue}"></div>`);
    const bgColorPassed = bgColorRegex.test(editorValue);
    const widthPassed = widthRegex.test(editorValue);
    const heightPassed = heightRegex.test(editorValue);
    const tests = [
    {
      name: "Contains a div element",
      passed: divPassed,
      error: divPassed ? "" : "Expected <div> element was not found",
      },
      {
      name: "Has a background color of red",
      passed: bgColorPassed,
      error: bgColorPassed ? "" : "Expected background color of red was not found",
      },
      {
      name: "Has a width of 100 pixels",
      passed: widthPassed,
      error: widthPassed ? "" : "Expected width of 100 pixels was not found",
      },
      {
      name: "Has a height of 100 pixels",
      passed: heightPassed,
      error: heightPassed ? "" : "Expected height of 100 pixels was not found",
      },
      ];
      setTests(tests);
  }

  return (
  <Box sx={{ p: '16px', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
  <Box sx={{ flex: '1', padding: '16px' }}>
    <Typography variant="h1" component="h1" sx={{ padding: '16px' }}>CSS</Typography>
    <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>Description</Typography>
    <Typography variant="body1">"Create a web page with a div element that has a background color of red and a width and height of 100 pixels."
    </Typography>
    <TestResult tests={tests} /> / 
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

export default Task2;
