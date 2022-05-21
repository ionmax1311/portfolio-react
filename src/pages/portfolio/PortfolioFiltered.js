import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioFiltered = ({ content }) => {
	return (
		<ul>
			{content &&
				content.map((item) => (
					<li className='portfolio-item' key={item.id}>
						<NavLink to={`/portfolio/${item.title}`}>
							<div className='portfolio-img__wrap'>
								<span
									className='portfolio-img'
									style={{
										backgroundImage: `url(${item.img})`,
										backgroundSize: "cover",
									}}></span>
							</div>

							<span className='portfolio-item__title'>
								{item.title}
							</span>
						</NavLink>
					</li>
				))}
		</ul>
	);
};

export default PortfolioFiltered;
