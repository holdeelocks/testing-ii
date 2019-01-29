import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
	state = {
		strikes: 0,
		balls: 0
	};

	render() {
		// const { strikes, balls } = this.state;
		return (
			<div className="dashboard">
				<Display count={this.state} />
			</div>
		);
	}
}

export default Dashboard;
