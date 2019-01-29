import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';
// import Dashboard from './Dashboard';

describe('<Display />', () => {
	const count = {
		balls: 0,
		strikes: 0
	};
	it('renders the ball count', () => {
		const { getByTestId, debug } = render(<Display count={count} />);
		const ballCount = getByTestId('balls');

		expect(ballCount).toHaveTextContent('0 balls');
	});

	it('renders the strike count', () => {
		const { getByTestId, debug } = render(<Display count={count} />);
		const strikeCount = getByTestId('strikes');

		expect(strikeCount).toHaveTextContent('0 strikes');
	});
});

// describe('<Dashboard />', () => {
// 	it('should add a strike', () => {
// 		const { getByText, getByTestId } = render(<Dashboard />);
// 		const selected = getByTestId('strikes');
// 		const button = getByText(/add strike/i);
// 		fireEvent.click(button);
// 		expect(selected).toHaveTextContent(/1 strikes/i);
// 	});
// });
