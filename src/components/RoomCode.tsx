import copyImg from '../assets/images/copy.svg'

export const RoomCode = () => {
  return <button className="room-code">
		<div>
			<img src={copyImg} alt="Copy Room Code" />
			<span>Room 436364364365764</span>
		</div>
	</button>;
};
