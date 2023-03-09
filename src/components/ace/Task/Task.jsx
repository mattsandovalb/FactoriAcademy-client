import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TestResults from "../Task1/TestResults";
import { getTaskById } from '../../../services/apiService';

const Task = () => {
  const [editorValue, setEditorValue] = useState('');
  const [tests, setTests] = useState([]);
  const task = getTaskById();

  const onEditorChange = (newValue) => {
    setEditorValue(newValue);
  };

  const onTestClick = () => {
    const iframe = document.getElementById('test-output');
    iframe.srcdoc = editorValue;
  };

  function runTests() {
    const h1Regex = /<h1>Hello World<\/h1>/;

    const passed = h1Regex.test(editorValue);

    const tests = [      {        name: "Contains <h1>Hello World</h1>",        passed: passed,        error: passed ? "" : "Expected <h1>Hello World</h1> tag was not found",      },    ];

    setTests(tests);
  }

  return (
    <Box sx={{ p: '16px', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Box sx={{ flex: '1', padding: '16px' }}>
        <Typography variant="h1" component="h1" sx={{ padding: '16px' }}>{task.title}</Typography>
        <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>Description</Typography>
        <Typography variant="body1">{task.statment}</Typography>
        <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>Instructions</Typography>
        <Typography variant="body1">{task.instruction}</Typography>
        <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>Documentation</Typography>
        <Typography variant="body1"><a href={task.documentation1} target="_blank" rel="noopener noreferrer">Documentation 1</a></Typography>
        <Typography variant="body1"><a href={task.documentation2} target="_blank" rel="noopener noreferrer">Documentation 2</a></Typography>
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
      
  
  <Box sx={{ flex: '1', padding: '16px', display: { md: 'block' } }}>
  <Typography variant="h6" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>YOUR RESULT</Typography>
    <iframe id="test-output" title="Test Output" width="100%" height="420px" style={{ backgroundColor: 'darkgray' }}></iframe>
    <Button variant="contained" sx={{ m: 1,  }} onClick={onTestClick}>SEE RESULT</Button>
    <Button variant="contained" onClick={runTests}>Run Tests</Button>
    <Button variant="contained" color="secondary" sx={{ m: 1,  }}>NEXT <ArrowForwardIosIcon/></Button>
  </Box>
</Box>
  );
};

export default Task;
