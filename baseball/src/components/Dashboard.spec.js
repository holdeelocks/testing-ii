import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
	describe('add strike button', () => {
		const { getByText, getByTestId } = render(<Dashboard />);
		const selected = getByTestId('strikes');
		const button = getByText(/add strike/i);
		it('should add a strike', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/1 strikes/i);
		});
		it('should go from 1 to 2 strikes', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/2 strikes/i);
		});
		it('should go back to 0 for third strike', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/0 strikes/i);
		});
	});

	describe('add ball button', () => {
		const { getByText, getByTestId } = render(<Dashboard />);
		const selected = getByTestId('balls');
		const button = getByText(/add ball/i);
		it('should go from 0 to 1 balls', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/1 balls/i);
		});
		it('should go from 1 to 2 balls', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/2 balls/i);
		});
		it('should go from 2 to 3 balls', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/3 balls/i);
		});
		it('should go from 3 to 0 balls', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/0 balls/i);
		});
	});
});
