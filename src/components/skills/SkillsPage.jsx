import SkillCard from './SkillCard.jsx'
import Dev2Icon from '../../assets/dev2.svg'
import './SkillsPage.css'

export default function SkillsPage() {
	const skills = ["Java", "Go", "JavaScript", "Python", "HTML", "CSS", "Docker", "Git", "PostgreSQL"]
	const cards = []

	skills.forEach((skill, index) => {
		cards.push(<SkillCard key={index} name={skill}/>)
	})

	return (
		<section id="skills" className="skills">
			<div>
				<h2>My <strong>skills</strong></h2>
				<ul className="skills-container">
					{ cards }
				</ul>
			</div>
			<div>
				<img className="skills-image" src={Dev2Icon} alt="Developer image" />
			</div>
		</section>
	)
}
