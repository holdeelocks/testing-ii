import React from 'react';

const Display = ({ count }) => {
	// console.log(balls, strikes);
	return (
		<div className="display" data-testid="display">
			<p data-testid="balls">{count.balls} balls</p>
			<p data-testid="strikes">{count.strikes} strikes</p>
		</div>
	);
};

export default Display;
