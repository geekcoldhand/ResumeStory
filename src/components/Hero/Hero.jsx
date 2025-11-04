
export default function Hero() {
	return (
		<section className="scene hero-scene center">
			<div className="hero-content center">
				<div
					className=" circle-border"
					style={{
						width: "10rem",
						height: "10rem",
						fontSize: "65px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginBottom: "15px",
						filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15))",
					}}
				>
					<img
						src={`${process.env.PUBLIC_URL}/images/avatar.png`}
						alt=""
						className="hero-avatar "
						style={{
							width: "6rem",
							height: "auto",
							borderRadius: "30%",
							filter: "dropShadow(0 4px 10px rgba(0, 0, 0, 0.15))",
						}}
					/>
				</div>

				<div className="name-container">
					<h1 className="hero-title permanent">
						Hi, my name is{" "}
						<span className="hero-name audioFont">Horatious</span>
					</h1>
				</div>
			</div>
			<City />
			<Train  />
		</section>
	);
}

const City = () => {
	return (
		<>
			<img
				src={`${process.env.PUBLIC_URL}/images/buckhead.png`}
				alt=""
				style={{
					height: "29vw",
					transform: "translateY(30vh) translateX(-10vw)",
				}}
			/>
		</>
	);
};

const Train = () => {
	return (
		<img
			className="train"
			src={`${process.env.PUBLIC_URL}/images/marta.png`}
			alt=""
			style={{
				height: "4rem",
				transform: "translateY(27vh) translateX(-192vw)",
				marginBottom: "2rem",
			}}
		/>
	);
};
