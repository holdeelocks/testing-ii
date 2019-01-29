import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
	const count = {
		balls: 0,
		strikes: 0
	};
	it('renders the ball count', () => {
		const { getByTestId } = render(<Display count={count} />);
		const ballCount = getByTestId('balls');

		expect(ballCount).toHaveTextContent('0 balls');
	});

	it('renders the strike count', () => {
		const { getByTestId } = render(<Display count={count} />);
		const strikeCount = getByTestId('strikes');

		expect(strikeCount).toHaveTextContent('0 strikes');
	});
});
