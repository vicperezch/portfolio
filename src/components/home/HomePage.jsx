import Button from '../common/Button.jsx'
import DevIcon from '../../assets/dev.svg'
import './HomePage.css'

export default function HomePage() {
	return (
		<section id="home" className="home">
			<div>
				<h1>BACKEND <strong>DEVELOPER</strong></h1>
				<p className="desc">
					I'm Víctor, a developer passionate about designing robust, scalable APIs. I have experience
					managing databases, and optimizing performance to deliver secure, efficient backend systems.
					I'm proficient in Java, Go, Docker and SQL databases. Apart from coding, I'm a big math and 
					videogames enthusiast. My strongest skills are problem solving and teamwork.
				</p>
				<div className="button-area">
					<Button text="Learn more about me" onClickFunc={ () => {} } />
					<Button variant="secondary" text="Download my CV" onClickFunc={ () => {} } />
				</div>
			</div>
			<div>
				<img className="home-image" src={DevIcon} alt="developer" />
			</div>
		</section>
	)
}

