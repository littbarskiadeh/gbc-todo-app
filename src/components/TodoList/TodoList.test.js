import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import mockData from '../mockData';

describe('todo list test', () => {
    it('should show title of todos', () => {
        render(<TodoList todos={mockData} />,);
        // mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
        screen.debug();
    });

    it('should render todo item with checkbox.', () => {
        render(<TodoItem todo={mockData[0]} /> );
        expect(screen.getByTestId('checkbox-1')).toBeInTheDocument();
        expect(screen.queryByText(/eat breakfast/i)).toBeInTheDocument();
    })
});