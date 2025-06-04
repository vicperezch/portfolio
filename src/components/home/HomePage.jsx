import Button from '../common/Button.jsx'
import DevIcon from '../../assets/dev.svg'
import './HomePage.css'

export default function HomePage() {
	return (
		<section className="home">
			<div>
				<h1>BACKEND <strong>DEVELOPER</strong></h1>
				<p className="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
					ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
					per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis
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

