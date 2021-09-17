import React from 'react'

const VeggieList = (props) => {
	const veggieItems = props.veggies.map((veggie, idx) => {
		return <li key={idx}>{veggie}</li>
	})

	return (
		<div className='list'>
			<ul>{veggieItems}</ul>
		</div>
	)
}

export default VeggieList
