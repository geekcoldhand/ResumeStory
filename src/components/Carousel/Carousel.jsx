import { useState } from "react";

const pictureData = [
	"public/images/education.png",
	"public/images/geekwashere.png",
];
export default Carousel = () => {
    const [items, setItems] = useState(pictureData);
	const handleAddItem = () => {
		setItems([...items, "item"]);
	};
	return (
		<div onClick={handleAddItem}>
			<img src={currentIndex} alt="" style={{ width: "100px" }} />
		</div>
	);
};
