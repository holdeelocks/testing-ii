import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
	state = {
		strikes: 0,
		balls: 0
	};

	render() {
		const { strikes, balls } = this.state;
		return (
			<div className="dashboard">
				<Display strikes={strikes} balls={balls} />
			</div>
		);
	}
}

export default Dashboard;
