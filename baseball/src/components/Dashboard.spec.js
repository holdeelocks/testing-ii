import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
	it('renders the dashboard', () => {
		const { getByTestId, debug } = render(<Dashboard />);
		// debug();
		// const ballCount = getByTestId('balls');
		// // expect(title.innerHTML).toBe('1')
		// expect(ballCount).toHaveTextContent('3');
	});
	// describe('select button', () => {
	// 	it('should select the players', () => {
	// 		const { getByText, getByTestId } = render(<Players />);
	// 		const selected = getByTestId('selected-player');
	// 		const button = getByText(/select/i);
	// 		fireEvent.click(button);
	// 		expect(selected).toHaveTextContent(/pedro/i);
	// 	});
	// });
});
