export default function Professional() {
	return (
		<section id="career" className="scene career-scene center">
			<div className="chapter center">
				<hr />
				<h2 className="audioFont xxxl">GWACH: A Geek With A Cold Hand</h2>
				<hr />
			</div>
			<div className="career-panel ">
				{/* <div
					style={{
						width: "auto",
						
						paddingBottom: "2rem",
						marginBlock: "2rem",
					}}
				>
					<img src={`${process.env.PUBLIC_URL}/images/hiMyName.png`} alt="" style={{ width: "35vw", height: "auto" }}/>
				</div> */}
				<p className="storyaParagraph dropCap">
					Today, I’d say I’m an engineer with a deep passion for culture,
					storytelling, systems, and building things that feel like the future.
					By day, I work as an AWS engineer at Accenture, spinning up cloud
					services and building new fullstack features. As a Senior Software
					Engineer at Accenture, I serve as a subject matter expert in web
					application development, with a focus on JavaScript and component
					development.
				</p>
				<p className="storyaParagraph">
					<div className="right-container">
						<img
							className="circle-image"
							src={`${process.env.PUBLIC_URL}/images/professional.gif`}
							alt=""
							style={{
								height: "180px",
								borderRadius: "50%",
								shapeOutside: "circle(50%)",
								objectFit: "contain",
								marginBottom: "6rem",
								marginLeft: "2rem",
							}}
						/>
					</div>
					I consistently implement automated CI/CD pipelines, develop secure and
					efficient RESTful APIs, and provision infrastructure using
					Infrastructure-as-Code tools.
				</p>
				<p className="storyaParagraph">
					I'm also passionate about mentoring and teaching, leading a youth
					mentorship program at Nexus Church in Atlanta, where I teach
					foundational programming principles and inspire the next generation of
					STEM talent.
				</p>
			</div>
		</section>
	);
}
