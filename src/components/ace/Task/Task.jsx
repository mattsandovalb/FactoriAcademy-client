import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TestResults from "./TestResult";
import {tasks} from '../../../data/tasks.js';
import ListTasks from './ListTasks';

const Task = () => {

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
    const tests = tasks.tests.map(test => {
      const regex = new RegExp(test.regex);
      const passed = regex.test(editorValue);

      return {
        name: test.name,
        passed: passed,
        error: passed ? "" : test.error,
      }
    });

    setTests(tests);
  }

  // Validate that tasks prop is defined
  if (!tasks) {
    return null; // or render an error message or fallback component
  }

  return (
    <Box sx={{ p: '16px', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
       <ListTasks tarea={tasks}/>
      <Box sx={{ flex: '1', padding: '16px' }}>
        <Typography variant="h1" component="h1" sx={{ padding: '16px' }}>{tasks.title}</Typography>
        <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>{tasks.statement}</Typography>
        <Typography variant="body1">{tasks.statement}</Typography>
        <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>{tasks.instruction}</Typography>
        <Typography variant="body1">{tasks.instruction}</Typography>
        <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>{tasks.documentaction1}</Typography>
        <Typography variant="body1"><a href={tasks.documentation1} target="_blank" rel="noopener noreferrer">{tasks.documentation2} </a></Typography>
        <Typography variant="body1"><a href={tasks.documentation2} target="_blank" rel="noopener noreferrer">{tasks.title} </a></Typography>
        <TestResults tests={tests} />
        <Button variant="contained" onClick={runTests} sx={{ mt: '16px' }}>
          Run Tests <ArrowForwardIosIcon />
        </Button>
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
          sx={{ marginBottom: '16px', bgcolor: 'gray', color: 'white', fontSize: '120px' }}
        />
      
      <Button variant="contained" onClick={onTestClick}>
          Preview Result <ArrowForwardIosIcon />
        </Button>
      </Box>
</Box>
  );
};

export default Task;
