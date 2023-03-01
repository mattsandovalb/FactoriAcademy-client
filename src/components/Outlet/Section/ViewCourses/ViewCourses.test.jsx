import React from 'react';
import { render } from '@testing-library/react';
import ViewCourses from './ViewCourses';

describe('ViewCourses', () => {
  it('renders without crashing', () => {
    render(<ViewCourses />);
  });
});

