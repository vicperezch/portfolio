import ProjectCard from './ProjectCard.jsx'
import './ProjectsPage.css'

export default function ProjectsPage() {
	const githubBase = "https://github.com/vicperezch/"

	return (
		<section id="projects" className="projects">
			<h2>My recent <strong>works</strong></h2>
			<ul className="project-container">
				<ProjectCard 
					title="DAPA page" 
					desc="This is a full-stack web application featuring a Go (Gin) backend and a Vue.js (Vite)
					frontend, both containerized with Docker for easy deployment. The backend provides a secure,
					modular API that handles business logic and database interactions, while the frontend consumes
					this API to deliver a dynamic, responsive user experience."
					image="dapa.png"
					link={githubBase + "dapa-backend"} />
				<ProjectCard 
					title="Series tracker"
					desc="This is a RESTful backend service built with Go, utilizing the Chi router and SQLite database.
					It provides CRUD operations for managing TV series, including endpoints for upvoting, downvoting,
					updating watch status, and tracking episodes. The project includes Swagger UI for interactive API
					documentation and is fully containerized with Docker."
					image="series.png"
					link={githubBase + "lab6-backend"} />
				<ProjectCard 
					title="Health REST API"
					desc="The Direct Health API is a Java-based RESTful API developed to power a mobile healthcare application.
					It enables users to register, log in, browse doctor profiles, schedule appointments, and receive medical notes.
					Built with Spring Boot and Maven, the backend is structured for scalability, supporting secure user authentication
					and efficient data management."
					image="directhealth.png"
					link={githubBase + "DirectHealthAPI"} />
			</ul>
		</section>
	)
}
