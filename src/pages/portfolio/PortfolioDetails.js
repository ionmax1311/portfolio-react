import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { works } from "./config";
import ArrowLeft from "../../img/arrow-left.png";

const PortfolioDetails = () => {
	const { title } = useParams();

	const cont = [...works.react, ...works.html];

	let isItems = cont.find((item) => item.title == title);
	let { img, linkCode, linkDemo, desc } = isItems;

	return (
		<div className='portfolio-detail container'>
			<h1 className='title'>{title}</h1>
			<span className='portfolio__back-link'>
				<img src={ArrowLeft} alt='img' />
				<NavLink to='/portfolio'>View All Projects</NavLink>
			</span>
			<div className='portfolio-detail__wrap'>
				<div
					className='portfolio-detail__img-wrap'
					style={{
						backgroundImage: `url(${img})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}></div>

				<div className='portfolio-detail__text'>
					<span className='portfolio-detail__desc text'>{desc}</span>
					<div className='portfolio-detail__link-wrap'>
						<a className='btn' target='_blank' href={linkDemo}>
							demo
						</a>
						<a className='btn' target='_blank' href={linkCode}>
							code
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioDetails;
