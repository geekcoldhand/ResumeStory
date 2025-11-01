import "./Storybook.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Geogrophy from "../Geography/Geography";
import Education from "../Education/Education";
import Professional from "../Professional/Professional";
import Today from "../Today/Today";
import Clouds from "../Clouds/Clouds";
import TV from "../TV/TV";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Storybook = () => {
	const cloudRef = useRef(null);
	const rootRef = useRef(null);

	useGSAP(
		() => {
			gsap.to(cloudRef.current, {
				x: -100 * 2,
				ease: "",
				scrollTrigger: {
					//markers: true,
					trigger: cloudRef.current,
					 scroll: cloudRef.current,
					start: "top center", // starts when cloud is near middle of view
					end: "bottom+=80 center",
					scrub: true,
				},
			});
		},
		{ scope: rootRef }
	);

	return (
		<>
			<div className="progress-container">
				<div className="progress-bar"></div>
			</div>

			<div ref={rootRef} className="storybook-root">
				<div className="bg-layer"></div>
				<Hero />

				<div ref={cloudRef} style={{ width: "100%" }}>
					<img
						className="cloud"
						src="./images/drawnClouds.png"
						alt=""
						style={{
							transform: "translateY(0vh) translateX(10vw)",
							height: "10rem",
							width: "18rem",
						}}
					/>
				</div>

				{/* <ParallaxLayer offset={0.1} speed={-1.5} factor={0.1} horizontal={true}>
					{Clouds.Cloud2()}
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
					{Clouds.Cloud3()}
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
					{Clouds.Cloud4()}
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
					{Clouds.Cloud5()}
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={1.5} factor={0.1} horizontal={true}>
					{Clouds.Cloud6()}
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={1.5} factor={0.1} horizontal={true}>
					{Clouds.Cloud7()}
				</ParallaxLayer> */}

				<City />
				<Train />
				<About />
				<Geogrophy />
				<Biker />
				<Education />
				<Professional />
				<Today />

				<footer className=" footer-scene center">
					<small className="pinstripe">Storybook</small>
				</footer>
			</div>
		</>
	);
};

const Biker = () => {
	return (
		<div className="biker">
			<img
				src={`${process.env.PUBLIC_URL}/images/biker.png`}
				alt=""
				style={{
					height: "4rem",

					transform: "translateY(520vh) translateX(-922vw)",
				}}
			/>
		</div>
	);
};



const City = () => {
	return (
		<>
			<img
				src={`${process.env.PUBLIC_URL}/images/buckhead.png`}
				alt=""
				style={{
					height: "29vw",
					transform: "translateY(-5vh) translateX(-10vw)",
				}}
			/>
		</>
	);
};

const Train = () => {
	return (
		<img
			src={`${process.env.PUBLIC_URL}/images/marta.png`}
			alt=""
			style={{
				height: "4rem",
				transform: "translateY(vh) translateX(-0vw)",
			}}
		/>
	);
};

export default Storybook;
