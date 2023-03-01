import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HtmlEditor from './HtmlEditor';

test('renders html editor', () => {
  render(<HtmlEditor />);
  const editorElement = screen.getByRole('textbox', { name: 'html-editor' });
  expect(editorElement).toBeInTheDocument();
});

test('renders html output in iframe when test button is clicked', () => {
  render(<HtmlEditor />);
  const editorElement = screen.getByRole('textbox', { name: 'html-editor' });
  const testButton = screen.getByText(/test/i);
  fireEvent.click(testButton);
  const iframeElement = screen.getByRole('iframe');
  expect(iframeElement.contentDocument.body.innerHTML).toContain(editorElement.value);
});
