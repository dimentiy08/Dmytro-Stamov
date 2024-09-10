import Monkey from './Monkey'
import Fox from './Fox'
import Tiger from './Tiger'
import Zibra from './Zibra'
import Eagle from './Eagle'

function Emoji() {


	return (
		<>
			<div className="d-flex justify-content-center">
				<Monkey />
				<Tiger />
				<Zibra />
				<Eagle />
				<Fox />
			</div>
		</>
	);
}

export default Emoji;