import Monkey from './Monkey'
import Fox from './Fox'
import Tiger from './Tiger'
import Zibra from './Zibra'
import Eagle from './Eagle'
import ResultButton from './ResultButton'

function Emoji() {


	return (
		<>
			<div className='d-flex flex-column align-items-center'>
				<div className="d-flex justify-content-center mt-5 mb-5">
					<Monkey />
					<Tiger />
					<Zibra />
					<Eagle />
					<Fox />
				</div>
				<ResultButton votes= {localStorage}/>
			</div>
		</>
	);
}

export default Emoji;