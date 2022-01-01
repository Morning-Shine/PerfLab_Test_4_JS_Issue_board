import { createSlice } from '@reduxjs/toolkit';
import { initialStateTasks } from '../../store/initialStateTask';

const tasksHandlerSlice = createSlice({
    name: 'tasksHandler',
    initialState: {
        tasksArray: initialStateTasks
    },
    reducers: {
        addTask: (state, action) => {
            state.tasksArray.push(action.payload);
        },
        deleteTask: (state, action) => {
            //удалить задачу
        },
        changeTask: (state, action) => {
            if (action.payload.currentTask.status != action.payload.targetBoardName) {
                state.tasksArray.find(
                    t => t.taskId == action.payload.currentTask.taskId
                ).status = action.payload.targetBoardName
            }
        }
    }
});

export const { addTask, deleteTask, changeTask } = tasksHandlerSlice.actions;
export default tasksHandlerSlice.reducer;