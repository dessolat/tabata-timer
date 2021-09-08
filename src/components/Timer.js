import React from 'react'
import '../css/Timer.css'

const Timer = ({timer}) => {
	return (
		<h2 className="timer">{new Date(timer * 1000).toISOString().substr(14,5)}</h2>
	)
}

export default Timer
