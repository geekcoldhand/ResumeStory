import Storybook from "./components/Storyline/Storybook";
import Flipbook from "./components/Flipbook/Flipbook";
function App() {
	const pictureData = [
		{
			front: `${process.env.PUBLIC_URL}/images/ninja.png`,
			back: `${process.env.PUBLIC_URL}/images/oneStop.png`,
		},
		{
			front: `${process.env.PUBLIC_URL}/images/oneStop.png`,
			back: `${process.env.PUBLIC_URL}/images/soapbox.gif`,
		},
	];

	return (
		<div className="App">
			<header className="App-header"></header>

			{/* <Storybook /> */}
			<Flipbook images={pictureData} />
		</div>
	);
}

export default App;
