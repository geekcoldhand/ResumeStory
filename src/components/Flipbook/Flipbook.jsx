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
		const rightEls = containerRef.current?.querySelectorAll(".right");
		if (!rightEls || rightEls.length === 0) return;
		setPages(rightEls);

		const nextIndex = stackIdx - 1;

		if (nextIndex >= 0) {
			if (rightEls[nextIndex]) {
				rightEls[nextIndex].classList.add("flip");
				rightEls[nextIndex].style.zIndex = zIdxCount + 1;
				setZIdxCounter(zIdxCount + 1);
			}
			setStackIdx(nextIndex);
		} else {
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
		const rightEls = containerRef.current?.querySelectorAll(".right");
		if (!rightEls || rightEls.length === 0) return;
		setPages(rightEls);

		if (stackIdx === rightEls.length) return;

		const nextIndex = stackIdx + 1;

		if (nextIndex <= rightEls.length) {
			if (rightEls[stackIdx - 1]) {
				rightEls[stackIdx - 1].className = "right";
				setTimeout(() => (rightEls[stackIdx - 1].style.zIndex = "auto"), 350);
			}
			setStackIdx(nextIndex);
		} else {
			for (let i = rightEls.length - 1; i >= 0; i--) {
				rightEls[i].classList.add("flip");
				rightEls[i].style.zIndex = rightEls.length + 1 - i;
			}
			setStackIdx(1);
		}
	};

	return (
		<div className="book-section">
			<button className="button" onClick={handleLeftTurn}>
				⇠
			</button>
			<div className="container" ref={containerRef}>
				<div className="right">
					<figure className="back" id="back-cover"></figure>
					<figure className="front"></figure>
				</div>
				{images.map((img, i) => {
					return (
						<div className="right" key={i}>
							<figure
								className="back"
								style={{ backgroundImage: `url(${img.back})` }}
							></figure>
							<figure
								className="front"
								style={{ backgroundImage: `url(${img.front})` }}
							></figure>
						</div>
					);
				})}
				<div className="right">
					<figure className="back"></figure>
					<figure className="front" id="cover">
						<h1>{coverTitle}</h1>
						<small>{coverDescription}</small>
					</figure>
				</div>
			</div>
			<button className="button" onClick={handleRightTurn}>
				⇢
			</button>
		</div>
	);
}
