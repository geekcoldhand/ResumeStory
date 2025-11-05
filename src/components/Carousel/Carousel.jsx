import { useState } from "react";

export default function Carousel({ album }) {
	const [items, setItems] = useState(album);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleShuffleItem = (e) => {
		e.preventDefault();

		const nextIndex = (currentIndex + 1) % items.length;
		setCurrentIndex(nextIndex);
	};

	return (
		<div onClick={handleShuffleItem} style={{ position: "relative" }}>
			{items.map((item, index) => (
				<img
					key={index}
					src={item}
					alt=""
					style={{
						position: "absolute",
						top: "10px",
						left: "50%",
						width: "100px",
						transform: "translateX(-50%) translateY(-85%)",
						zIndex: index === currentIndex ? 1 : 0,
						transition: "z-index 0.6s ease",
					}}
				/>
			))}
		</div>
	);
}
