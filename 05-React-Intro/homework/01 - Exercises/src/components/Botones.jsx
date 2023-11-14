import React from "react";

class Botones extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { alerts } = this.props;
		return (
			<div>
				<button onClick={() => alert(alerts.m1)}>Modulo 1</button>
				<button onClick={() => alert(alerts.m2)}>Modulo 2</button>
			</div>
		);
	}
}

export default Botones;
// "Me hiciste click"
// "AAAA!! NO SIGAS..."
