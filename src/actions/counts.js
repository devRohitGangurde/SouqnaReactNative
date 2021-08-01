import { COUNTER_CHANGE, GET_PAGE_LIST } from '../constants/index';
const axios = require('axios');

export function changeCount(count) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}

export function setPageList(pageList) {
    return {
        type: GET_PAGE_LIST,
        payload: pageList,
    }
}

export function getPageList() {
    return async (dispatch) => {
        await axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(async function (response) {
                // handle success
                console.log('getPageList ', response);
                await dispatch(setPageList(response.data));
                // return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}