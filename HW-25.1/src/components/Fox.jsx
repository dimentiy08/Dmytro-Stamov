import { useState, useEffect } from 'react'
import emoji2 from '../assets/image_1104.svg'

function Fox() {
	const [vote, setVote] = useState(() => {
		const saveVote = localStorage.getItem('Fox')
		return saveVote ? Number(saveVote) : 0
	})

	useEffect(() => {
    localStorage.setItem('Fox', vote);
  }, [vote])
	return (
		<>
			<div className='d-flex align-items-center flex-column'>
				<a href="#" onClick={() => setVote((vote) => vote + 1)}>
					<img src={emoji2} className=" p-4 g-col-4" alt="2" />
				</a>
				{vote && <div>Fox: {vote}</div>}
			</div>
		</>
	);
}

export default Fox;