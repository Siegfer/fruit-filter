import React from 'react'

const List = (props) => {
	const foodStuff = props.food.map((food, idx) => {
		return <li key={idx}>{food}</li>
	})

	return (
		<div className='list'>
			<ul>{foodStuff}</ul>
		</div>
	)
}

export default List
