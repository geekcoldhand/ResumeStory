import Flipbook from "../Flipbook/Flipbook";
export default function Education() {
	const pictureData = [
		{
			front: `${process.env.PUBLIC_URL}/images/ninja.png`,
			back: `${process.env.PUBLIC_URL}/images/oneStop.png`,
		},
		{
			front: `${process.env.PUBLIC_URL}/images/robotArm.png`,
			back: `${process.env.PUBLIC_URL}/images/soapbox.gif`,
		},
	];
	return (
		<section className="scene education-scene center">
			<div className="chapter center">
				<hr />
				<h2 className="audioFont xxxl">
					The Ink of a Scholar; Hustle of a Dollar
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
					If you’ve ever taken a personality test, you know how unpredictable
					they can be. That is true for most tests; however, I found myself
					strongly resonating with my results from the Briggs Type Analysis
					test. When I first took the Briggs Type Indicator, I didn’t expect
					much. My results indicated I am an INTJ, characterized by independent
					and analytical thinking. One particular attribute I found highly
					congruent was the focus on logic and education, and a preference for
					long-term planning. This explains my affinity for creating curricula
					and implementing them in iterations.
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
					<br />
					There’s no doubt in my mind that education is important, and at the
					same time, there’s no doubt that the American education system and
					curriculum need a refresher. While I believe education is an important
					foundation for reaching your goals, I’ve noticed that higher education
					isn't practical or accessible to everyone. I was fortunate to study 3
					years of Computer Science at the University of West Georgia on the
					Dean's list. In my 4th year, I made a tough decision to not return to
					campus that fall. I still think about that day. I think that was one
					of the single most important decisions in my life up until that point.
					<br />
					<br />
					Looking back, I believe that I made the right decision not to return
					in the fall. I continued my education in software engineering while
					working various full-time jobs in the fashion, food, and retail
					industries. Eventually, I was accepted into the Georgia Institute of
					Technology bootcamp and earned my Full Stack Development
					certification.
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
