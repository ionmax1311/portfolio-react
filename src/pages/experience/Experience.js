import React from "react";
import { experience } from "./config";
import ExperienceItem from "./ExperienceItem";
import CV from "../../img/CV_Frontend_Ionash_Maxim.pdf";
import "./experience.css";

const Experience = () => {
	return (
		<div className='experience container'>
			<h1 className='title'>Experience</h1>
			<div className='experience-wrap'>
				{experience
					.slice(0)
					.reverse()
					.map((item) => (
						<ExperienceItem
							date={item.date}
							company={item.company}
							position={item.position}
							skills={item.skills}
							key={item.id}
						/>
					))}
				<a href={CV} className='btn' download>
					Download CV
				</a>
			</div>
		</div>
	);
};

export default Experience;
