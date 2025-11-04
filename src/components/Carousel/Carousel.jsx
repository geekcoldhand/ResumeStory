import { useState } from "react";

const pictureData = [
	`${process.env.PUBLIC_URL}/images/avatar.png`,
	`${process.env.PUBLIC_URL}/images/geekwashere.png`,
];

export default function Carousel() {
	const [items, setItems] = useState(pictureData);
	const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

	const handleShuffleItem = (e) => {
		e.preventDefault();

		// Calculate the next index
		const nextIndex = (currentIndex + 1) % items.length; // Wrap around to the first image
		setCurrentIndex(nextIndex); // Update the current index
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
						transform: "translateX(-50%) translateY(-70%)",
						zIndex: index === currentIndex ? 1 : 0,
						transition: "z-index 0.6s ease",
					}}
				/>
			))}
		</div>
	);
}
