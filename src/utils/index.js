export const actionsInit = ({prepareTime, workTime, restTime, roundsNumber, cyclesNumber}) => {
	const actions = [];
	
	for (let i = 1; i <= cyclesNumber; i++) {
		actions.push({ header: 'Prepare!', time: prepareTime });
		for (let j = 1; j <= roundsNumber; j++) {
			actions.push({ header: 'Work!', time: workTime });
			actions.push({ header: 'Rest time!', time: restTime });
		}
	}
	
	return actions
};