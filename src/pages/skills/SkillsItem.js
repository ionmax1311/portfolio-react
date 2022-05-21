import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../skills/skills.css";
import ProgressProvider from "./ProgressProvider";

const SkillsItem = ({ name, value }) => {
	const [valueEnd, setValueEnd] = useState(value);
	return (
		<li className='skills-item'>
			<span className='skills-subtitle'>{name}</span>
			<ProgressProvider valueStart={0} valueEnd={valueEnd}>
				{(value) => (
					<CircularProgressbar
						value={value}
						text={<tspan>{value}%</tspan>}
					/>
				)}
			</ProgressProvider>
		</li>
	);
};

export default SkillsItem;
