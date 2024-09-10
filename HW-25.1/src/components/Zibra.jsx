import { useState, useEffect } from 'react'
import emoji4 from '../assets/image_1116.svg'

function Zibra() {
	const [vote, setVote] = useState(() => {
		const saveVote = localStorage.getItem('Zibra')
		return saveVote ? Number(saveVote) : 0
	})

	useEffect(() => {
    localStorage.setItem('Zibra', vote);
  }, [vote])
	return (
		<>
			<div className='d-flex align-items-center flex-column'>
				<a href="#" onClick={() => setVote((vote) => vote + 1)}>
					<img src={emoji4} className=" p-4 g-col-4" alt="3" />
				</a>
				{vote && <div>Zibra: {vote}</div>}
			</div>
		</>
	);
}

export default Zibra;