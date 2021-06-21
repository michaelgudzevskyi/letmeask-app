import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export const Home = () => {
	return (
		<div>
			<aside>
				<img src={illustrationImg} alt="Illustration" />
				<strong>Create Q&amp;A rooms</strong>
				<p>learn and share knowledge with other people</p>
			</aside>
			<main>
				<div>
					<img src={logoImg} alt="Let me asl logo" />
					<button>
						<img src={googleIconImg} alt="Google Icom" />
						Create your room with Google
					</button>
					<div>ou entre em uma sala</div>
					<form>
						<input 
							type="text" 
							placeholder="Enter room code"
						/>
						<button type="submit">Enter the room</button>
					</form>
				</div>
			</main>
		</div>
	)
}
 