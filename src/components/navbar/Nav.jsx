import NavButton from './NavButton.jsx'
import './Nav.css'

export default function Nav() {
	const sections = ["Home", "Skills", "Projects", "Contact"]
	const buttons = []

	sections.forEach((sec, i) => {
		buttons.push(
			<li key={i}>
				<NavButton text={sec} ref={`#${sec.toLowerCase()}`}/>
			</li>
		)
	})

	return (
		<nav>
			<p>Víctor Pérez</p>
			<ul className="nav-buttons">
				{ buttons }
			</ul>
		</nav>
	)
}
