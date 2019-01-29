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

	describe('foul ball button', () => {
		const { getByText, getByTestId } = render(<Dashboard />);
		const selected = getByTestId('strikes');
		const button = getByText(/foul ball/i);
		it('should go from 0 to 1 strikes', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/1 strikes/i);
		});
		it('should go from 1 to 2 strikes', () => {
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/2 strikes/i);
		});
		it('should not go past 2 strikes', () => {
			fireEvent.click(button);
			fireEvent.click(button);
			fireEvent.click(button);
			fireEvent.click(button);
			expect(selected).toHaveTextContent(/2 strikes/i);
		});
	});

	describe('hit button', () => {
		const { getByText, getByTestId } = render(<Dashboard />);
		const strike = getByTestId('strikes');
		const ball = getByTestId('balls');
		const hitButton = getByText(/hit/i);
		const strikeButton = getByText(/add strike/i);
		const ballButton = getByText(/add ball/i);
		it('should zero out 1 strike and 0 balls', () => {
			fireEvent.click(strikeButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});

		it('should zero out 1 strike and 1 ball', () => {
			fireEvent.click(strikeButton);
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 1 strike and 2 balls', () => {
			fireEvent.click(ballButton);
			fireEvent.click(strikeButton);
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 1 strike and 3 balls', () => {
			fireEvent.click(ballButton);
			fireEvent.click(ballButton);
			fireEvent.click(strikeButton);
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 2 strikes and 0 balls', () => {
			fireEvent.click(strikeButton);
			fireEvent.click(strikeButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 2 strikes and 1 balls', () => {
			fireEvent.click(strikeButton);
			fireEvent.click(strikeButton);
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 2 strikes and 2 balls', () => {
			fireEvent.click(strikeButton);
			fireEvent.click(strikeButton);
			fireEvent.click(ballButton);
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 2 strikes and 3 balls', () => {
			fireEvent.click(strikeButton);
			fireEvent.click(strikeButton);
			fireEvent.click(ballButton);
			fireEvent.click(ballButton);
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 0 strikes and 1 ball', () => {
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 0 strikes and 2 balls', () => {
			fireEvent.click(ballButton);
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
		it('should zero out 0 strikes and 3 balls', () => {
			fireEvent.click(ballButton);
			fireEvent.click(ballButton);
			fireEvent.click(ballButton);
			fireEvent.click(hitButton);
			expect(strike).toHaveTextContent(/0 strikes/i);
			expect(ball).toHaveTextContent(/0 balls/i);
		});
	});
});
