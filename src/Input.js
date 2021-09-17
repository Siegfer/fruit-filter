import React from 'react'

const Input = (props) => {
	return (
		<div>
			<label htmlFor='fruit-filter'>Filter these Food: </label>
			<input
				type='text'
				name='fruit-filter'
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	)
}

export default Input
