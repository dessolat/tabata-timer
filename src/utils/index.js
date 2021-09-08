export const actionsInit = (settings) => {
	const actions = [];
	const { prepareTime, workTime, restTime, roundsNumber, cyclesNumber } = settings;

	for (let i = 1; i <= cyclesNumber; i++) {
		actions.push({ header: 'Prepare!', time: prepareTime });
		for (let j = 1; j <= roundsNumber; j++) {
			actions.push({ header: 'Work!', time: workTime });
			actions.push({ header: 'Rest time!', time: restTime });
		}
	}

	console.log('Initial actions: ', actions);
};