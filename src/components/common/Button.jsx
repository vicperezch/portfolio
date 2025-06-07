import './Button.css'

export default function Button({ variant="primary", text, link }) {
	const style = variant === "primary" ? "primary-button" : "secondary-button"

	return (
		<a className={style + " portfolio-button"} href={link} target="_blank">{ text }</a>
	)
}
