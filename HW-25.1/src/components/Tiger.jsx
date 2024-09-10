import { useState, useEffect } from 'react'
import emoji3 from '../assets/image_1111.svg'

function Tiger() {
	const [vote, setVote] = useState(() => {
		const saveVote = localStorage.getItem('Tiger')
		return saveVote ? Number(saveVote) : 0
	})

	useEffect(() => {
    localStorage.setItem('Tiger', vote);
  }, [vote])
	return (
		<>
			<div className='d-flex align-items-center flex-column'>
				<a href="#" onClick={() => setVote((vote) => vote + 1)}>
					<img src={emoji3} className=" p-4 g-col-4" alt="3" />
				</a>
				{vote && <div>Tiger: {vote}</div>}
			</div>
		</>
	);
}

export default Tiger;