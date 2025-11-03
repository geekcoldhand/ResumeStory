//import "../Storyline/Storybook.css";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Cloud from "../Clouds/Cloud";
import Hero from "../Hero/Hero";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Timeline = () => {
	const rootRef = useRef(null);
	const source = `${process.env.PUBLIC_URL}/images/drawnClouds.png`;

	useGSAP(
		() => {
			const clouds = gsap.utils.toArray(".cloud");
			clouds.forEach((cloud) => {
				gsap.to(cloud, {
					x: 150 * 2,
					scrollTrigger: {
						trigger: cloud,
						start: "bottom bottom",
						end: "center 20%",
						scrub: true,
						// markers: true,
					},
				});
			});
		},
		{ scope: rootRef }
	);
	return (
		<section
			id="timeline"
			style={{
				height: "160vh",
				width: "100%",
				position: "relative",
				// Critical: Prevent iOS scroll issues
				WebkitOverflowScrolling: "touch",
			}}
			ref={rootRef}
		>
			<Hero />
			<div className="clouds-cluster" style={{ position: "relative" }}>
				<div
					className="cloud"
					style={{
						position: "absolute",
						top: "60vh",
						left: "-62px",
						width: "200px",
						height: "100px",
						willChange: "transform",
					}}
				>
					<img
						src={source}
						alt=""
						style={{ width: "200px", height: "100px" }}
					/>
				</div>
				<div
					style={{
						position: "absolute",
						top: "0vh",
						left: "-62px",
						// Improve mobile performance
						willChange: "transform",
					}}
				>
					<img
						className="cloud"
						src={source}
						alt=""
						style={{ width: "200px", height: "100px" }}
					/>
				</div>
			</div>
		</section>
	);
};

export default Timeline;
