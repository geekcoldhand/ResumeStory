import React from "react";

export default class TV extends React.Component {
	static TV1 = () => {
		return (
			<div className="tv">
				<img
					src={`${process.env.PUBLIC_URL}/images/onStage.gif`}
					alt=""
					style={{
						position: "relative",
						height: "6rem",
						width: "6rem",
						transform: "translateY(-35vh)",
					}}
				/>

				<hr />
				<img
					src={`${process.env.PUBLIC_URL}/images/onStage.gif`}
					alt=""
					style={{
						position: "relative",
						height: "6rem",
						width: "6rem",
						transform: "translateY(-35vh)",
					}}
				/>
				<hr />
				<img
					src={`${process.env.PUBLIC_URL}/images/onStage.gif`}
					alt=""
					style={{
						position: "relative",
						height: "6rem",
						width: "6rem",
						transform: "translateY(-35vh)",
					}}
				/>
			</div>
		);
	};

	static TV2 = () => {
		return (
			<div className="tv">
				<img
					src={`${process.env.PUBLIC_URL}/images/retroTV.png`}
					alt=""
					style={{
						position: "relative",
						height: "7rem",
						width: "7rem",
						transform: "translateY(-70vh)",
					}}
				/>

				<img
					src={`${process.env.PUBLIC_URL}/images/retroTV.png`}
					alt=""
					style={{
						position: "relative",
						height: "7rem",
						width: "7rem",
						transform: "translateY(-70vh)",
					}}
				/>

				<img
					src={`${process.env.PUBLIC_URL}/images/retroTV.png`}
					alt=""
					style={{
						position: "relative",
						height: "7rem",
						width: "7rem",
						transform: "translateY(-70vh)",
					}}
				/>
			</div>
		);
	};
}
