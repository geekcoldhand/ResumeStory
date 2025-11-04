export default function About() {
	return (
		<section id="about-me" className="scene about-me center">
			<div className="chapter center">
				<hr />
				<h2 className="audioFont xxxl">
					Lorem ipsum dolor sit, amet consectetur
				</h2>
				<hr />
			</div>
			<p className="storyaParagraph dropCap">
				Hello!
				<br />
				I'm a Senior Software Engineer with over seven years of experience
				delivering scalable, cloud-native applications across both front-end and
				back-end systems. I focus on full-stack development, specializing in
				cloud computing, microservices architecture, and modern DevOps
				practices.
			</p>
			<p className="storyaParagraph">
				I hold a Bachelor of Science in Computer Science from the University of
				West Georgia and a Full Stack Development certification from the Georgia
				Institute of Technology, with a focus on the MERN stack. Lorem ipsum
				dolor sit, amet consectetur adipisicing elit.
			</p>

			<div
				className="center"
				style={{
					width: "auto",
					height: "10vh",
					paddingBottom: "2rem",
					marginBlock: "3rem",
				}}
			>
				<img
					src={`${process.env.PUBLIC_URL}/images/homeworkHelper.png`}
					alt=""
					style={{ width: "65vw", height: "auto", maxWidth: "350px" }}
				/>
				<small>photo caption here</small>
				<hr />
			</div>
			<p className="storyaParagraph ">
				<div
					className="right-container"
					style={{ marginRight: "1rem", marginBottom: "3rem" }}
				>
					<img
						className="circle-image"
						src={`${process.env.PUBLIC_URL}/images/okcomputer.png`}
						alt=""
						style={{
							width: "150px",
							height: "150px",
							borderRadius: "50%",
							shapeOutside: "circle(50%)",
						}}
					/>
				</div>
				I discovered a love for embedded programming languages (Java and C++) in
				high school from my dad. That excitement led to me majoring in Computer
				Science, growing my focus toward web development. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Officia labore nemo sint obcaecati
				iusto. Optio culpa sunt velit reiciendis eligendi distinctio sint
				dignissimos aspernatur, natus corrupti, voluptates pariatur voluptatibus
				debitis?
			</p>
		</section>
	);
}

const Polariod = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "75vh",
				border: "10px solid #363636",
				transform: "translateY(10vh) translateX(0vw)",
				maxWidth: "400px",
			}}
			className="polariod"
		>
			<img
				src={`${process.env.PUBLIC_URL}/images/rampTest.gif`}
				alt=""
				style={{ height: "100%", zIndex: 0, width: "100%", objectFit: "cover" }}
			/>
		</div>
	);
};
