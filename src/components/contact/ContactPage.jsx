import './ContactPage.css'

export default function ContactPage() {
	return (
		<footer id="contact" className="contact">
			<div className="info">
				<img src="user.png" alt="Person image" />
				<p style={{marginRight: "50px"}}>Víctor Pérez</p>
				<img src="mail.png" alt="Mail" />
				<a href="mailto:vmpch1@outlook.com">vmpch1@outlook.com</a>
			</div>
			<div className="socials">
				<a href="https://github.com/vicperezch" target="_blank">
					<img src="github.png" alt="GitHub" />
				</a>
				<a href="https://linkedin.com/in/victorperezch" target="_blank">
					<img src="linkedin.png" alt="LinkedIn" />
				</a>
			</div>
		</footer>
	)
}
