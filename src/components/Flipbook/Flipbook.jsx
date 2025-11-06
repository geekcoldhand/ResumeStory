import { useRef, useState, useEffect } from "react";
import "./Flipbook.css";

export default function FlipBook({ images, coverTitle, coverDescription }) {
	const containerRef = useRef();
	const [stackIdx, setStackIdx] = useState(0);
	const [zIdxCount, setZIdxCounter] = useState(1);

	useEffect(() => {
		if (containerRef.current) {
			const rightEls = containerRef.current.querySelectorAll(".right");
			setStackIdx(rightEls.length);
		}
	}, []);

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
			setStackIdx(rightEls.length);
			setZIdxCounter(1);
		}
	};

	const handleLeftTurn = () => {
		const rightEls = containerRef.current.querySelectorAll(".right");
		if (stackIdx === images.length) return;

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
			setStackIdx(rightEls.length);
		}
	};

	return (
		<div class="book-section">
			<button className="button" onClick={handleLeftTurn}>
				⇠
			</button>
			<div class="container" ref={containerRef}>
				<div class="right">
					<figure class="back" id="back-cover"></figure>
					<figure class="front"></figure>
				</div>
				{images.map((img, i) => {
					const isLastPage = i === images.length - 1;
					return (
						<div class="right" key={i}>
							<figure
								class="back"
								style={{ backgroundImage: `url(${img.back})` }}
							></figure>
							<figure
								class="front"
								style={{ backgroundImage: `url(${img.front})` }}
							></figure>
						</div>
					);
				})}
				<div class="right">
					<figure class="back"></figure>
					<figure class="front" id="cover">
						<h1>{coverTitle}</h1>
						<small> {coverDescription}</small>
					</figure>
				</div>
			</div>
			<button className="button" onClick={handleRightTurn}>
				⇢
			</button>
		</div>
	);
}
