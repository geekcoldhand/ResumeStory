import { useRef, useState, useEffect } from "react";
import "./Flipbook.css";

export default function FlipBook({ images, coverTitle, coverDescription }) {
	const containerRef = useRef();
	const [stackIdx, setStackIdx] = useState(0);
	const [pages, setPages] = useState([]);
	const [zIdxCount, setZIdxCounter] = useState(1);

	useEffect(() => {
		if (containerRef.current) {
			const rightEls = containerRef.current.querySelectorAll(".right"); 
			setPages(rightEls);
			setStackIdx(rightEls.length); 
		}
	}, []);

	const handleRightTurn = () => {
		if (stackIdx >= 1) {
			setStackIdx(stackIdx - 1);
		} else {
			setStackIdx(pages.length - 1);
			pages.forEach((el) => {
				el.className = "right";
				setTimeout(() => {
					el.style.zIndex = "auto";
				}, 300);
				setZIdxCounter(1);
			});
		}
		pages[stackIdx].classList.add("flip");
		setZIdxCounter(zIdxCount + 1);
		pages[stackIdx].style.zIndex = zIdxCount;
	};

	const handleLeftTurn = () => {
		if (stackIdx < pages.length) {
			setStackIdx(stackIdx + 1);
		} else {
			setStackIdx(1);
			pages.forEach((el, idx) => {
				pages(idx).classList.add("flip");
				pages(idx).style.zIndex = pages.length + 1 - idx;
			});
		}
		pages[stackIdx - 1].className = "right";
		setTimeout(() => (pages[stackIdx - 1].style.zIndex = "auto"), 350);
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
