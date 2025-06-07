import ProjectCard from './ProjectCard.jsx'
import './ProjectsPage.css'

export default function ProjectsPage() {
	const githubBase = "https://github.com/vicperezch/"

	return (
		<section id="projects" className="projects">
			<h2>My recent <strong>works</strong></h2>
			<ul className="project-container">
				<ProjectCard title="DAPA page" desc="Lorem ipsum" image="/dapa.png" link={githubBase + "dapa-backend"}/>
				<ProjectCard title="Series tracker" desc="Lorem ipsum" image="/series.png" link={githubBase + "lab6-backend"} />
				<ProjectCard title="Health REST API" desc="Lorem ipsum" image="/directhealth.png" link={githubBase + "DirectHealthAPI"} />
			</ul>
		</section>
	)
}
