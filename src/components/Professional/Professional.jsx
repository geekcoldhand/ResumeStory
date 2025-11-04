export default function Professional() {
	return (
		<section id="career" className="scene career-scene center">
			<div className="chapter center">
				<hr />
				<h2 className="audioFont xxxl">
					Lorem ipsum dolor sit, amet consectetur
				</h2>
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
					As a Senior Software Engineer at Accenture, I serve as a subject
					matter expert in transforming monolithic legacy systems into
					containerized, service-oriented architectures that enhance
					performance, maintainability, and cost efficiency.
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
								marginBottom: "5rem",
								marginLeft: "1rem",
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
