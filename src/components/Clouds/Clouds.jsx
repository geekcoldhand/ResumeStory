
export default function Clouds() {
	const source = `${process.env.PUBLIC_URL}/images/drawnClouds.png`;

	return (
		<div
			id="timeline"
			style={{
				width: "100%",
				
				position: "relative",
				WebkitOverflowScrolling: "touch",
			}}
		>
			<div
	
			>
				<img
					src={source}
					className="cloud"
					alt=""
					style={{
						position: "absolute",
						top: "-16vh",
						left: "45vw",
						width: "200px",
						height: "100px",
					}}
				/>
			</div>
			<div
				className="cloud"
	
			>
				<img
					className="cloud"
					src={source}
					alt=""
					style={{
						position: "absolute",
						top: "-26vh",
						left: "-30vw",
						width: "200px",
						height: "100px",
						transform: "rotate(180deg)",
					}}
				/>
			</div>
		</div>
	);
}
