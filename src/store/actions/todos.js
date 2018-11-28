import {
    ADD_TASK,
    CHANGE_STATUS_TASK,
    DELETE_TASK,
    SAVE_EDITED_TASK, TOGGLE_EDIT_STATUS
} from './types';

export function addNewTask(data) {
    return {
            type: ADD_TASK,
            payload: data
        }
}

export function deleteTask(index) {
    return dispatch => dispatch({
        type: DELETE_TASK,
        payload: index
    })
}

export function toggleEditStatus(index) {
    return dispatch => dispatch({
        type: TOGGLE_EDIT_STATUS,
        payload: index
    })
}

export function saveEditedTask(data) {
    return {
        type: SAVE_EDITED_TASK,
        payload: data
    }
}

export function changeTaskProgressStatus(data) {
    return dispatch => dispatch({
        type: CHANGE_STATUS_TASK,
        payload: data
    })
}