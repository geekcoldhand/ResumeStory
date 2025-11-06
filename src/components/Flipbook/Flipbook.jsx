import { useRef, useState } from "react";
import "./Flipbook.css";

export default function FlipBook({ images }) {
	const containerRef = useRef();
	const [stackIdx, setStackIdx] = useState(images.length);
	const [zIdxCount, setZIdxCounter] = useState(1);

	const handleRightTurn = () => {
		const rightEls = containerRef.current.querySelectorAll(".right");

		let nextIndex = stackIdx - 1;

		if (nextIndex >= 0) {
			rightEls[nextIndex].classList.add("flip");
			rightEls[nextIndex].style.zIndex = zIdxCount + 1;
			setStackIdx(nextIndex);
			setZIdxCounter(zIdxCount + 1);
		} else {
			// reset
			rightEls.forEach((el) => {
				el.className = "right";
				setTimeout(() => {
					el.style.zIndex = "auto";
				}, 300);
			});
			setStackIdx(images.length);
			setZIdxCounter(1);
		}
	};

	const handleLeftTurn = () => {
		const rightEls = containerRef.current.querySelectorAll(".right");

		let nextIndex = stackIdx + 1;

		if (nextIndex <= images.length) {
			rightEls[stackIdx].className = "right";
			setTimeout(() => (rightEls[stackIdx].style.zIndex = "auto"), 350);
			setStackIdx(nextIndex);
		} else {
			// flip all back
			for (let i = images.length - 1; i >= 0; i--) {
				rightEls[i].classList.add("flip");
				rightEls[i].style.zIndex = images.length + 1 - i;
			}
			setStackIdx(1);
		}
	};

	return (
		<div class="book-section">
			<div class="container" ref={containerRef}>
				<div class="right">
					<figure class="back" id="back-cover"></figure>
					<figure class="front"></figure>
				</div>
				<div class="right">
					<figure class="back"></figure>
					<figure class="front"></figure>
				</div>
				<div class="right">
					<figure class="back"></figure>
					<figure class="front"></figure>
				</div>
				<div class="right">
					<figure class="back"></figure>
					<figure class="front"></figure>
				</div>
				<div class="right">
					<figure class="back"></figure>
					<figure class="front"></figure>
				</div>
				<div class="right">
					<figure class="back"></figure>
					<figure class="front" id="cover">
						<h1>Horatious</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Adipisci, modi.
						</p>
					</figure>
				</div>
			</div>

			<button className="button" onClick={handleLeftTurn}>
				Prev
			</button>
			<button className="button" onClick={handleRightTurn}>
				Next
			</button>

			{/* <style>{`
				.flip {
					transform: rotateY(-180deg) !important;
				}
				.flip::before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					z-index: 10;
					width: 100%;
					height: 100%;
					border-radius: 0 10px 10px 0;
					background-color: rgba(0,0,0,0.1);

				.front#cover, .back#back-cover{
            		background-color: #ffcb63;
            		font-family: calibri;
            		text-align: left;
            		padding: 0 30px;
       				 }
       			 .front#cover h1{
            		color: #fff;
					margin: 10px 0;}
      
					.front#cover p{
            color: rgba(0,0,0,0.8);
            font-size: 14px;
        }
				}
			`}</style> */}
		</div>
	);
}

// const styles = {
// 	figure: {
// 		margin: 0,
// 		height: "100%",
// 		width: "100%",
// 		position: "absolute",
// 		top: 0,
// 		left: 0,
// 		backgroundSize: "200%",
// 		backgroundRepeat: "no-repeat",
// 		backfaceVisibility: "hidden",
// 		overflow: "hidden",
// 	},
// 	button: {
// 		border: "2px solid #ef9f00",
// 		backgroundColor: "transparent",
// 		color: "#ef9f00",
// 		padding: "10px 20px",
// 		borderRadius: "5px",
// 		cursor: "pointer",
// 		margin: "10px",
// 		transition: "0.3s ease-in-out",
// 	},
// };
