import React from "react";
import ExperienceSkillsItem from "./ExperienceSkillsItem";

const ExperienceItem = ({ date, company, position, skills }) => {
	return (
		<div className='experience-item'>
			<div className='experience-item__header'>
				<div className='experience-item__header-in'>
					<span className='experience-date'>{date}</span>
					<span className='experience-company'>{company}</span>
					<span className='experience-position'>{position}</span>
				</div>
			</div>

			<ExperienceSkillsItem skills={skills} />
		</div>
	);
};

export default ExperienceItem;
