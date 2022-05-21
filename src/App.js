import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Portfolio from "./pages/portfolio/Portfolio";
import Skills from "./pages/skills/Skills";
import Background from "./assets/bg-main.jpeg";
import PortfolioDetails from "./pages/portfolio/PortfolioDetails";

function App() {
	return (
		<div className='app'>
			<HashRouter>
				<Nav />
				<div
					className='content'
					style={{
						backgroundImage: `url(${Background})`,
						backgroundSize: "cover",
					}}>
					<Routes>
						<Route path='/' element={<About />} />
						<Route path='/skills' element={<Skills />} />
						<Route path='/experience' element={<Experience />} />
						<Route path='/portfolio' element={<Portfolio />} />
						<Route
							path='/portfolio/:title'
							element={<PortfolioDetails />}
						/>
					</Routes>
				</div>
			</HashRouter>
		</div>
	);
}

export default App;
