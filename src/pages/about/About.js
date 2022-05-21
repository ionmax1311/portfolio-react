import React from "react";
import Photo from "../../img/I.jpg";

import {
	faLinkedin,
	faGithub,
	faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";

const About = () => {
	return (
		<div className='about container'>
			<div className='about-text'>
				<h1>Hi! I am Maxim.</h1>
				<img className='about-img-mob' src={Photo} alt='I' />
				<p className='text'>
					I am fronted developer, located in Ukrane.Here are some of
					my works that I did during study and work.
				</p>
				<div className='about-icons'>
					<a href='#' target='_blank' title='Github'>
						<FontAwesomeIcon
							className='icon-social'
							icon={faGithub}
						/>
					</a>
					<a href='#' target='_blank' title='Linkedin'>
						<FontAwesomeIcon
							className='icon-social'
							icon={faLinkedin}
						/>
					</a>
					<a href='#' target='_blank' title='Telegram'>
						<FontAwesomeIcon
							className='icon-social'
							icon={faTelegramPlane}
						/>
					</a>
				</div>
			</div>
			<img className='about-img' src={Photo} alt='I' />
		</div>
	);
};

export default About;
