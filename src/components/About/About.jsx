import Carousel from "../Carousel/Carousel";

export default function About() {
	const album = [
		`${process.env.PUBLIC_URL}/images/homeworkHelper1.png`,
		`${process.env.PUBLIC_URL}/images/homeworkHelper2.png`,
		`${process.env.PUBLIC_URL}/images/homeworkHelper.png`,
	];

	return (
		<section id="about-me" className="scene about-me center">
			<div className="chapter center">
				<hr />
				<h2 className="audioFont xxxl">Word Is Born: Hello World</h2>
				<hr />
			</div>
			<p className="storyaParagraph dropCap">
				Dear Reader,
				<br />
				My name is Horatious Harris II.
				<br />
				I was born in Stockbridge, GA, but grew up in a few southern Georgia
				cities. I spent the majority of my development in north Atlanta, in
				Alpharetta. There, my interest in drawing, fashion, engineering, and
				architecture occupied me with a project.
				<br />
				While most of my peers were in sports or summer camps, I was 12 or 13
				Frankensteining one of my toy conceptions in my parents' basement. I
				built robot arms, robot R/C cars, soapbox cars, and a few flying
				contraptions. Some of it worked, most of it didn’t, but it allowed me to
				cultivate an engineering imagination. 
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
				<Carousel album={album} transY={-50} />
				<small style={{ transform: "translateY(5rem)" }}>
					Homework Helper in C++
				</small>
				<hr />
			</div>
			<p className="storyaParagraph">
				My dad taught me software engineering when I was about 14. I learned how
				to read and write C++, and I continued teaching myself with projects. I
				can remember the first continuous development project I worked on, which
				I called Homework Helper. It did what the name implied and solved any
				equations from Math and Science from 7th - 9th grade.
			</p>

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
				I learned early on the importance of version control as I was mass
				emailing my C++ files every night to myself. More than ever, Homework
				Helper taught me how to create value from my intellect. What began as a
				selfish homework algorithm grew into arriving early to the school
				library and distributing that digital value to waiting students. From
				then on, I felt the gravity of what the one-to-many relationship of
				software can do.
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
