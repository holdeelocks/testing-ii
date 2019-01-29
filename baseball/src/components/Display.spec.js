import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
	const count = {
		balls: 3,
		strikes: 2
	};
	it('renders the ball count', () => {
		const { getByTestId, debug } = render(<Display count={count} />);
		const ballCount = getByTestId('balls');

		expect(ballCount).toHaveTextContent('3 balls');
	});

	it('renders the strike count', () => {
		const { getByTestId, debug } = render(<Display count={count} />);
		const strikeCount = getByTestId('strikes');

		expect(strikeCount).toHaveTextContent('2 strikes');
	});
});
