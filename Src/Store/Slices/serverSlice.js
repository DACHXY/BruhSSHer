import { createSlice } from '@reduxjs/toolkit';
import { fakeServerData } from '../../fakeDB';

const serverSlice = createSlice({
    name: "servers",
    initialState: [fakeServerData],
    reducers: {
        addServer(state, action) {
            const newItem = action.payload
            const maxSequence = state.reduce((max, item) => Math.max(max, item.sequence), 0);
            newItem.sequence = maxSequence + 1
            state.push(newItem)
        },
        removeServer(state, action) {
            const itemId = action.payload
            state = state.filter(item => item.id !== itemId)
        },
        updateServer(state, action) {
            const itemUpdateData = action.payload
            const itemToUpdate = state.find(item => item.id === itemUpdateData.id)
            if (itemToUpdate) {
                itemToUpdate = itemUpdateData;
            }
        }
    }
});

export const { addServer, removeServer, updateServer } = serverSlice.actions;

export default serverSlice;