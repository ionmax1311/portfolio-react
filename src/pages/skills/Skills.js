import React from "react";
import "../skills/skills.css";
import SkillsItem from "./SkillsItem";
import { skills } from "./config";

const Skills = () => {
	return (
		<div className='skills container'>
			<h1 className='title'>Skills</h1>
			<div className='skills-wrap'>
				<div className='skills-text'>
					<h2 className='subtitle'>Basic skills</h2>
					<p className='text'>
						Cross-browser, valid, semantic, adaptive layout.
					</p>
					<p className='text'>
						HTML, CSS/SCSS, JS, JQuery, React, Redux.
					</p>
					<p className='text'>REST API, Gulp, Git, Firebase.</p>
					<p className='text'>Bootstrap, Material UI.</p>
				</div>
				<ul className='skills-list'>
					{skills.map((item) => (
						<SkillsItem
							name={item.name}
							value={item.value}
							key={item.id}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Skills;
