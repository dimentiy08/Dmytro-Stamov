import { useState, useEffect } from 'react'
import emoji5 from '../assets/image_1167.svg'

function Eagle() {
	const [vote, setVote] = useState(() => {
		const saveVote = localStorage.getItem('Eagle')
		return saveVote ? Number(saveVote) : 0
	})

	useEffect(() => {
    localStorage.setItem('Eagle', vote);
  }, [vote])

	return (
		<>
			<div className='d-flex align-items-center flex-column'>
				<a href="#" onClick={() => setVote((vote) => vote + 1)}>
					<img src={emoji5} className=" p-4 g-col-4" alt="3" />
				</a>
				{vote && <div>Eagle: {vote}</div>}
			</div>
		</>
	);
}

export default Eagle;