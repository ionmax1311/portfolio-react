import React from "react";
import { tabs } from "./config";

const PortfolioTabs = ({ activeTab, setActiveTab }) => {
	return (
		<div className='portfoio-tabs'>
			{tabs.map((item) => (
				<button
					className={
						activeTab === item.action ? "btn-tab active" : "btn-tab"
					}
					id={item.id}
					onClick={() => setActiveTab(item.action)}
					key={item.id}>
					{item.title}
				</button>
			))}
		</div>
	);
};

export default PortfolioTabs;
