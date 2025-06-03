import './NavButton.css'

export default function NavButton({ text, ref }) {
	return (
		<a className="navButton" href={ ref }>{ text }</a>
	)
}
