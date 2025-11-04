const Navbar = () => {
	return (
		<header
			style={{
				position: "absolute",
				top: "0",
				display: "flex",
				width: "100%",
				justifyContent: "space-evenly",
				paddingTop: "1rem",
			}}
		>
			<a href="#about-me">Past</a>

			<a href="#career">Present</a>

			<a href="#future">Future</a>
		</header>
	);
};

export default Navbar;
