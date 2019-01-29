import React from 'react';

const Display = ({ balls, strikes }) => {
	return (
		<div className="display">
			<p className="balls">{balls} balls</p>
			<p className="strikes">{strikes} strikes</p>
		</div>
	);
};

export default Display;
