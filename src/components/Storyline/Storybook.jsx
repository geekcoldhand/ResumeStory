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
				const direction = index % 2 === 0 ? 150 : -150;

				gsap.to(cloud, {
					x: direction,
					ease: "none",
					scrollTrigger: {
						trigger: cloud,
						scroller: rootRef.current,
						start: "top center",
						end: "bottom center",
						scrub: 1,
						markers: false,
					},
				});
			});

			const train = gsap.utils.toArray(".train");
			gsap.to(train, {
				x: 190 * 2,
				scrollTrigger: {
					trigger: train,
					scroller: rootRef.current,
					start: "top center",
					end: "bottom center",
					scrub: 1,
					
				},
			});


			const biker = gsap.utils.toArray(".biker");
			gsap.to(biker, {
				 x: 150 ,
				scrollTrigger: {
					trigger: biker,
					scroller: rootRef.current,
					start: "top center",
					end: "bottom center",
					scrub: 1,
					
				},
			});
		},
		{ scope: rootRef }
	);

	return (
		<div ref={rootRef} className="storybook-root">
			<div className="progress-container">
				<div className="progress-bar"></div>
			</div>
			<Hero />
			<Clouds />
			<About />
			<Geogrophy />
		
			<Education />
			<Professional />
			<Today />
			<footer className=" footer-scene center">
				<small className="pinstripe">Storybook</small>
			</footer>
		</div>
	);
};



export default Storybook;
