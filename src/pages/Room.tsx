import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

import "../styles/room.scss";

export const Room = () => {


  return (
		<div id='page-room'>
			<header>
				<div className="content">
					<img src={logoImg} alt="Let me ask" />

					<div></div>
				</div>
			</header>

			<main className="content">
				<div className="room-title">
					<h1>Room React</h1>
					<span>4 questions</span>
				</div>

				<form>
					<textarea 
						placeholder="What do you want to ask?"
					/>

					<div className="form-footer">
						<span>
							To ask your question, you have to be {''}
							<button type="button">authorized.</button>
						</span>

						<Button type="submit">Send your question</Button>
					</div>
				</form>
			</main>
		</div>
	);
};
