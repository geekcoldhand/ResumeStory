import React from "react";

export default class Cloud extends React.Component {
	static source = `${process.env.PUBLIC_URL}/images/drawnClouds.png`;
	static Cloud1 = () => {
		return <img src={this.source} alt="" />;
	};

	static Cloud2 = () => {
		return (
			<img
				className="cloud"
				src={this.source}
				alt=""
				style={{
					transform: "translateY(10vh) translateX(50vw)",
				}}
			/>
		);
	};

	static Cloud3 = () => {
		return (
			<img
				className="cloud"
				src={this.source}
				alt=""
				style={{
					transform: "translateY(0vh) translateX(20vw)",
				}}
			/>
		);
	};

	static Cloud4 = () => {
		return (
			<img
				className="cloud"
				src={this.source}
				alt=""
				style={{
					transform: "translateY(10vh) translateX(20vw)",
				}}
			/>
		);
	};

	static Cloud5 = () => {
		return (
			<img
				className="cloud"
				src={this.source}
				alt=""
				
			/>
		);
	};

	static Cloud6 = () => {
		return (
			<img
				src={this.source}
				alt=""
				style={{
					height: "10rem",
					transform: "translateY(33vh) translateX(-25%) rotate(180deg)",
				}}
			/>
		);
	};

	static Cloud7 = () => {
		return (
			<img
				src={this.source}
				alt=""
				style={{
					height: "7rem",
					transform: "translateY(37vh) translateX(-15%) rotate(180deg)",
				}}
			/>
		);
	};

	static cloud11() {
		return <img className="cloud" src={this.source} alt="" style={{}} />;
	}
}
