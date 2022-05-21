import React, { useState } from "react";
import "./portfolio.css";
import PortfolioTabs from "./PortfolioTabs";
import PortfolioFiltered from "./PortfolioFiltered";
import { works } from "./config";

const Portfolio = () => {
	const [activeTab, setActiveTab] = useState("react");

	return (
		<div className='portfolio container'>
			<h1 className='title'>Portfolio</h1>
			<div className='portfolio-wrap'>
				<PortfolioTabs
					setActiveTab={setActiveTab}
					activeTab={activeTab}
				/>

				<PortfolioFiltered
					content={works[activeTab]}
					activeTab={activeTab}
				/>
			</div>
		</div>
	);
};

export default Portfolio;
