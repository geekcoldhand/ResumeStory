import Flipbook from "../Flipbook/Flipbook";
export default function Education() {
	const pictureData = [
		{
			front: `${process.env.PUBLIC_URL}/images/ninja.png`,
			back: `${process.env.PUBLIC_URL}/images/oneStop.png`,
		},
		{
			front:
				"This is some text. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			back: `${process.env.PUBLIC_URL}/images/soapbox.gif`,
		},
	];
	return (
		<section className="scene education-scene center">
			<div className="chapter center">
				<hr />
				<h2 className="audioFont xxxl">
					The Ink Scholar Versus Labor of a Dollar
				</h2>
				<hr />
			</div>

			<div className="education-panel ">
				<p className="storyaParagraph dropCap">
					<div className="left-container">
						<img
							className="circle-image"
							src={`${process.env.PUBLIC_URL}/images/geekwashere.png`}
							alt=""
							style={{
								width: "150px",
								height: "150px",
								borderRadius: "50%",
								shapeOutside: "circle(50%), float: left",
							}}
						/>
					</div>
					I’ve always been a huge fan of learning. While I believe education is
					an important foundation for reaching your goals, I’ve noticed higher
					education is not practical or simply for everyone. I was fortunate to
					study Computer Science at West Georgia and Kennesaw State University.
					I completed a Full Stack Development certification at the Georgia
					Institute of Technology (MERN stack)
					<br />
					<div className="right-container" style={{ marginRight: "1rem" }}>
						<img
							className="circle-image"
							src={`${process.env.PUBLIC_URL}/images/einstein.png`}
							alt=""
							style={{
								width: "150px",
								height: "150px",
								borderRadius: "50%",
								shapeOutside: "circle(50%), float: left",
							}}
						/>
					</div>
					I studied patterns, logic, and problem decomposition. I love systems
					that are simple and repeatable. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quaerat repellendus deleniti tempore quasi ea at
					enim doloremque vel quisquam temporibus nihil doloribus magni totam ex
					sunt blanditiis, architecto vero sed!
				</p>
			</div>
			<Biker />
			<Flipbook
				images={pictureData}
				coverTitle="Memories"
				coverDescription="2012-2018"
			/>
		</section>
	);
}
const Biker = () => {
	return (
		<div className="biker">
			<img
				className="biker"
				src={`${process.env.PUBLIC_URL}/images/biker.png`}
				alt=""
				style={{
					height: "4rem",
					transform: "translateY(-9vh) translateX(-40vw)",
				}}
			/>
		</div>
	);
};
