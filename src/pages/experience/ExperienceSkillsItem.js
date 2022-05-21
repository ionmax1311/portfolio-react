import React from "react";

const ExperienceSkillsItem = ({ skills }) => {
	return (
		<ul>
			{skills.map((item, index) => (
				<li className='text' key={index}>
					{item}
				</li>
			))}
		</ul>
	);
};

export default ExperienceSkillsItem;
