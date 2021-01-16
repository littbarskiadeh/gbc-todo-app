import React from 'react'
import '@testing-library/jest-dom';
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import TodoItem from './TodoItem';
import mockData from '../../mockData';

describe('<TodoItem /> tests', () => {
    it('should render todo item properly', () => {
        render(<TodoItem todo={mockData[0]} />);
        expect(screen.queryByText(/eat breakfast/i)).toBeInTheDocument();
        expect(screen.getByTestId('close-btn-1')).toBeInTheDocument();
    });
    
});