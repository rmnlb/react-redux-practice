import {
    ADD_TASK,
    SAVE_EDITED_TASK,
    CHANGE_STATUS_TASK,
    DELETE_TASK, TOGGLE_EDIT_STATUS
} from '../actions/types';

export default function (state=[], action) {
    switch (action.type) {
        case ADD_TASK: {

            return [...state,
                {
                    name: action.payload.name,
                    description: action.payload.description,
                    status: 100,
                    isEditing: false
                }];
        }
        case TOGGLE_EDIT_STATUS: {
            state[action.payload].isEditing = !state[action.payload].isEditing;
            return [...state]
        }
        case SAVE_EDITED_TASK: {
            state[action.payload.index].name = action.payload.name;
            state[action.payload.index].description = action.payload.description;
            state[action.payload.index].isEditing = !state[action.payload.index].isEditing;
            return [...state];
        }
        case CHANGE_STATUS_TASK: {
            state[action.payload.index].status = action.payload.status;
            return [...state];
        }
        case DELETE_TASK: {
            return [...state.slice(0, action.payload),
                ...state.slice(action.payload+1)];
        }
        default: {
            return state;
        }
    }
}