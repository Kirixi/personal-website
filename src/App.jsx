import { BrowserRouter } from "react-router-dom";
import { About, Socials, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";
import Loader from "./components/Loader";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary ">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
					<StarsCanvas />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Socials />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
