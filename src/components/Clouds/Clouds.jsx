export default function Clouds() {
	const source = `${process.env.PUBLIC_URL}/images/drawnClouds.png`;

	return (
		<div
			id="clouds"
			style={{
				width: "100%",

				position: "relative",
				WebkitOverflowScrolling: "touch",
			}}
		>
			<div>
				<img
					src={source}
					className="cloud"
					alt=""
					style={{
						position: "absolute",
						top: "-46vh",
						left: "55vw",
						width: "200px",
					}}
				/>
			</div>

			<div>
				<img
					className="cloud"
					src={source}
					alt=""
					style={{
						position: "absolute",
						top: "-46vh",
						left: "-5vw",
						width: "210px",
						transform: "rotate(180deg)",
					}}
				/>
			</div>

			<div>
				<img
					src={source}
					className="cloud"
					alt=""
					style={{
						position: "absolute",
						top: "-39vh",
						left: "53vw",
						width: "100px",
						height: "60px",
					}}
				/>
			</div>

			<div>
				<img
					className="cloud"
					src={source}
					alt=""
					style={{
						position: "absolute",
						top: "-39vh",
						left: "20vw",
						width: "120px",
					}}
				/>
			</div>

			<div>
				<img
					className="cloud"
					src={source}
					alt=""
					style={{
						position: "absolute",
						top: "-33vh",
						left: "50vw",
						width: "100px",
					}}
				/>
			</div>
			<div>
				<img
					className="cloud"
					src={source}
					alt=""
					style={{
						position: "absolute",
						top: "-37vh",
						left: "-5vw",
						width: "120px",
						transform: "rotate(180deg)",
					}}
				/>
			</div>
			<div>
				<img
					src={source}
					className="cloud"
					alt=""
					style={{
						position: "absolute",
						top: "-36vh",
						left: "72vw",
						width: "100px",
						height: "60px",
						transform: "rotate(180deg)",
					}}
				/>
			</div>

			<div>
				<img
					className="cloud"
					src={source}
					alt=""
					style={{
						position: "absolute",
						top: "-34vh",
						left: "28vw",
						width: "94px",
						transform: "scaleX(-1)",
					}}
				/>
			</div>
		</div>
	);
}
