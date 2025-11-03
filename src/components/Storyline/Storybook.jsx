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

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Storybook = () => {
	const source = `${process.env.PUBLIC_URL}/images/drawnClouds.png`;
	const rootRef = useRef(null);

	useGSAP(
		() => {
			const clouds = gsap.utils.toArray(".cloud");
			clouds.forEach((cloud, index) => {
				const direction = index === 0 ? -150 : 150;
				
				gsap.to(cloud, {
					x: direction,
					ease: "none",
					scrollTrigger: {
						trigger: cloud,
						scroller: rootRef.current,
						start: "top center",
						end: "bottom center",
						scrub: 1,
						markers: false
					}
				});
			});
		},
		{ scope: rootRef }
	);

	return (
		<div ref={rootRef} className="storybook-root">
			<div className="progress-container">
				<div className="progress-bar"></div>
			</div>

			<div
				style={{
					width: "100%",
					position: "relative",
				}}
			>
				<Hero />
				<Clouds />
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
		</div>
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
				transform: "translateY(-3vh) translateX(-260vw)",
			}}
		/>
	);
};

export default Storybook;
