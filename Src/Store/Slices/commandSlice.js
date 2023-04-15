import { createSlice } from '@reduxjs/toolkit';
import { fakeIconCommandData, fakeTextCommandData } from '../../fakeDB';

const commandSlice = createSlice({
  	name: "commands",
  	initialState: [fakeIconCommandData, fakeTextCommandData],
	reducers: {
		addCommand(state, action) {
			const newCommand = action.payload
			const maxSequence = state.reduce((max, item) => Math.max(max, item.sequence), 0);
			newCommand.sequence = maxSequence + 1
			state.push(newCommand)
		},
		removeCommand(state, action) {
			const itemId = action.payload
			state = state.filter(item => item.id !== itemId)
		},
		updateCommand(state, action) {
			const itemUpdateData = action.payload
			const itemToUpdate = state.find(item => item.id === itemUpdateData.id)
			if (itemToUpdate) {
				itemToUpdate = itemUpdateData;
			}
		}
	}
});
export const { addCommand, removeCommand, updateCommand } = commandSlice.actions;

export default commandSlice;