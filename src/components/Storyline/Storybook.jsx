import "./Storybook.css";
import { use, useRef } from "react";
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
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Storybook = () => {
	const rootRef = useRef(null);
	const progressBarRef = useRef(null);
	const timelineRef = useRef(null);

	useGSAP(
		() => {
			const container = rootRef.current;
			console.log(container);
			ScrollTrigger.create({
				scroller: container,
				trigger: timelineRef.current,
				start: "top top", // Start tracking when the top of the container hits the top of the viewport
				end: "bottom top", // Stop tracking when the bottom of the container hits the top of the viewport
				onUpdate: ({ progress }) => {
					console.log(`Scroll Progress: ${Math.round(progress * 100)}%`);
				},
				scrub: true,
			});
			// more code below
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
					start: "top bottom",
					end: "bottom center",
					scrub: 1,
				},
			});

			const biker = gsap.utils.toArray(".biker");
			gsap.to(biker, {
				x: 150,
				scrollTrigger: {
					trigger: biker,
					scroller: rootRef.current,
					start: "top bottom",
					end: "bottom center",
					scrub: 1,
				},
			});

			const leftPictures = gsap.utils.toArray(".left-container");
			const rightPictures = gsap.utils.toArray(".right-container");
			leftPictures.forEach((picture, index) => {
				gsap.from(picture, {
					x: -150,
					opacity: 0,
					scrollTrigger: {
						trigger: picture,
						scroller: rootRef.current,
						start: "top bottom",
						end: "bottom center",
						scrub: 1,
					},
				});
			});

			rightPictures.forEach((picture, index) => {
				gsap.from(picture, {
					x: 50,
					opacity: 0,
					scrollTrigger: {
						trigger: picture,
						scroller: rootRef.current,
						start: "top bottom",
						end: "bottom center",
						scrub: 1,
					},
				});
			});
			const chapter = gsap.utils.toArray(".chapter");
			chapter.forEach((chapter, index) => {
				gsap.from(chapter, {
					y: 35,
					scrollTrigger: {
						trigger: chapter,
						scroller: rootRef.current,
						start: "top 90%",
						end: "bottom center",
						scrub: 1,
					},
				});
			});
		},

		{ scope: rootRef }
	);

	return (
		<div ref={rootRef} className="storybook-root">
			<Navbar />
			<div className="progress-container">
				<div className="progress-bar" ref={progressBarRef}></div>
			</div>
			<div className="timeline" ref={timelineRef}>
				<Hero />
				<Clouds />
				<About />
				{/* <Geogrophy /> */}
				<Education />
				<Carousel />
				<Professional />
				<Today />
				<footer className=" footer-scene center">
					<button
						className="pinstripe"
						style={{
							fontSize: "0.5rem",
							padding: "0.5rem",
							borderRadius: "0.5rem",
							border: "none",
							backgroundColor: "var(--c-compliment)",
							color: "white",
							marginBlock: "1rem",
						}}
						onClick={() =>
							rootRef.current.scrollTo({ top: 0, behavior: "smooth" })
						}
					>
						Back To Top
					</button>
					<small className="pinstripe">Storybook</small>
				</footer>
			</div>
		</div>
	);
};

export default Storybook;
