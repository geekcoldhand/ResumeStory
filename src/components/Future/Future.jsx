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
					My creative work lives at the intersection of humanity, art,
					engineering, and fashion. I love imagining garments that don’t just
					look good but do something—talk back, protect you, transform, and most
					importantly, speak on the issues of society. I'm always exploring how
					culture and technology can meet in more honest, soulful ways.
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
							}}
						/>
					</div>
					The things I build aren’t just projects—they're my little worlds.
					Community matters to me. Whether it’s mentoring, jamming on a weird
					idea, or co-creating something with purpose, I stay open. I believe
					the best tech comes from conversation and collaboration, not
					isolation. If we’ve got shared values and a bold vision, I’m all in.
					Let’s stay in touch and design the future.
				</p>

				<p className="storyaParagraph">
					I’m writing this autobiography to preserve the memory of who I am and
					once was. I'm always open to connecting with people who share my
					passion for learning, teaching, and discussing new technologies.
					<br />
					Thanks for stopping by!
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
				transform: "translateY(5vh) translateX(100vw) scaleX(-1)",
				marginBottom: "2rem",
				zIndex: 10,
			}}
		/>
	);
};
