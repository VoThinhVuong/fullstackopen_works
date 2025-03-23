import { createSlice } from "@reduxjs/toolkit";

const notiSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setNoti(state, action) {return action.payload},
        hideNoti(state, action) {
            return null
        }
    }
})

export const setNotification = (content, seconds) => {
    return async dispatch => {
        dispatch(setNoti(content))
        setTimeout(() => {dispatch(hideNoti())}, seconds*1000)
    }
}

export const { setNoti, hideNoti } = notiSlice.actions
export default notiSlice.reducer