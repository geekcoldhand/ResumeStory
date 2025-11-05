import "./Storybook.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Hero from "../Hero/Hero";
import About from "../About/About";
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
	const pictureData = [
		`${process.env.PUBLIC_URL}/images/avatar.png`,
		`${process.env.PUBLIC_URL}/images/geekwashere.png`,
	];
	useGSAP(
		() => {
			const scrubber = rootRef.current;
			ScrollTrigger.create({
				scroller: scrubber,
				trigger: timelineRef.current,
				start: "top top",
				end: "bottom top",
				onUpdate: (self) => {
					gsap.to(progressBarRef.current, {
						scaleX: self.progress + 0.1,
						duration: 0.1,
						ease: "none",
					});
				},
				scrub: true,
			});

			const clouds = gsap.utils.toArray(".cloud");
			clouds.forEach((cloud, index) => {
				const direction = index % 2 === 0 ? 50 : -50;

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
				x: 100 * 2,
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
				<Education />
				<Carousel album={pictureData} />
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
							rootRef.current.scrollTo({ top: -2, behavior: "smooth" })
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
