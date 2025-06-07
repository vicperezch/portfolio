import './SkillCard.css'

export default function SkillCard({ name }) {
	return (
		<li className="skill-card">
			<img src={`${name}.png`} />
			<p>{ name }</p>
		</li>
	)
}
