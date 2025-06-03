import NavButton from './NavButton.jsx'
import './Nav.css'

export default function Nav() {
	const sections = ["Home", "About me", "Technologies", "Projects", "Contact"]
	const buttons = []

	for (let i = 0; i < sections.length; i++) {
		buttons.push(<li><NavButton text={sections[i]} ref={"#"} /></li>)
	}

	return (
		<nav>
			<p>Víctor Pérez</p>
			<ul className="nav-buttons">
				{ buttons }
			</ul>
		</nav>
	)
}
