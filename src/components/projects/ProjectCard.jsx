import './ProjectCard.css'

export default function ProjectCard({ title, desc, image, link }) {
	return (
		<li className="project-card">
			<div className="inner-card">
				<div className="card-front">
					<img src={image} alt="Project image" />
				</div>
				<div className="card-back">
					<a href={link} target="_blank">
						<p className="project-name">{ title }</p>
						<img src="/link.png" alt="Link" />
					</a>
					<p classname="project-desc">{ desc }</p>
				</div>
			</div>
		</li>
	)
}
