import { useState, useEffect } from 'react'
import emoji1 from '../assets/image_1096.svg'

function Monkey() {
	const [vote, setVote] = useState(() => {
		const saveVote = localStorage.getItem('Monkey')
		return saveVote ? Number(saveVote) : 0
	})

	useEffect(() => {
    localStorage.setItem('Monkey', vote);
  }, [vote])

	return (
		<>
			<div className='d-flex flex-column align-items-center'>
				<a href="#" onClick={() => setVote((vote) => vote + 1)}>
					<img src={emoji1} className=" p-4 g-col-4" alt="1" />
				</a>
				{vote && <div>Monkey {vote}</div>}
			</div>
		</>
	);
}

export default Monkey;