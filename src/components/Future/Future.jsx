export default function Today() {
	return (
		<section id="future" className="scene today-scene center">
			<div className="today-panel center">
				<div className="chapter center">
					<hr />
					<h2 className="audioFont xxxl" style={{}}>
						To Infinity and Beyond
					</h2>
					<hr />
				</div>
				<p className="storyaParagraph dropCap" style={{}}>
					With the arrival of AGI, the horizon for tech is full of excitement
					and opportunity. With a solid grasp on the fundamentals of software
					engineering and computer science, anyone can become dangerous enough
					to make enterprise-scale systems. My focus now is on continuing to
					explore, teach, and apply AGI in meaningful ways. Recently, I had the
					opportunity to speak about Artificial General and Superintelligence at
					Atlanta Tech Week 2025—a milestone that deepened my commitment to
					shaping how we interact with intelligent systems.
				</p>

				<p className="storyaParagraph">
					<div className="left-container">
						<img
							className="circle-image"
							src={`${process.env.PUBLIC_URL}/images/education.png`}
							alt=""
							style={{
								height: "150px",
								border: "none",
								shapeOutside: "circle(50%)",
								filter: "drop-shadow(0 8px 10px rgba(0, 0, 0, 0.15))",
							}}
						/>
					</div>
					My creative work lives at the intersection of humanity, art,
					engineering, and fashion. I love imagining garments that don’t just
					look good but do something—talk back, protect you, transform, and most
					importantly, speak on the issues of society. I'm always exploring how
					culture and technology can meet in more honest, soulful ways. The
					things I build aren’t just projects—they're my little worlds.
				</p>

				<p className="storyaParagraph">
					<div
						className=""
						style={{
							marginLeft: "2rem",
							height: "fit-content",
						
						}}
					>
						<img
							className=""
							src={`${process.env.PUBLIC_URL}/images/ATW.png`}
							alt=""
							style={{
								width: "120px",
								shapeOutside: `url(${process.env.PUBLIC_URL}/images/ATW.png)`,
								float: "right",
							}}
						/>
					</div>
					Community matters to me. Whether it’s mentoring, jamming on a weird
					idea, or co-creating something with purpose, I stay open. I believe
					the best tech comes from conversation and collaboration, not
					isolation. If we’ve got shared values and a bold vision, I’m all in.
					Let’s stay in touch and design the future. I'm always open to
					connecting with people who share my passion for learning, teaching,
					and discussing new technologies.
					<br />
					<br />
					Let’s stay in touch and design the future. Thanks for stopping by!
					<br />- H
				</p>
			</div>
			<Train />
		</section>
	);
}

const Train = () => {
	return (
		<img
			className="lastTrain"
			src={`${process.env.PUBLIC_URL}/images/marta.png`}
			alt=""
			style={{
				height: "4rem",
				transform: "translateY(5vh) translateX(180vw) scaleX(-1)",
				marginBottom: "2rem",
				zIndex: 10,
			}}
		/>
	);
};
