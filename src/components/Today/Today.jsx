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
					Meanwhile, in university, I started an alterations service hustle for
					a small group of friends. I would ride my bike to wherever you were on
					campus to mend and repair students’ garments. Soon, I was getting
					commissions to create bespoke garments. Eventually, there was enough
					money there to call it a business, so I gave it a name: GWACH.
				</p>
				<p className="storyaParagraph">
					<div className="right-container" style={{ height: "140px" }}>
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
					I doubled down and started marketing tailored dresses, pants, and
					jackets for commissions. I was known as the tailor, so much so that my
					clients even drove hours to me after I didn’t return that semester. I
					then worked as a professional tailor in the fashion/retail industry
					for notable companies like Buckle, Levi’s and Strauss, AG Jeans,
					David’s Bridal, and a few smaller brands. 
				</p>
				<p className="storyaParagraph">
					Today, I’d say I’m an engineer with a deep passion for culture,
					storytelling, systems, and building things that feel like the future.
					By day, I work as an AWS engineer at Accenture, spinning up cloud
					services and building new full-stack features. 
				</p>
			</div>
		</section>
	);
}
