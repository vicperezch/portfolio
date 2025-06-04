import './Button.css'

export default function Button({ variant="primary", text, onClickFunc }) {
	const style = variant === "primary" ? "primary-button" : "secondary-button"

	return (
		<button className={style} onClick={onClickFunc} >{ text }</button>
	)
}
