import axios from 'axios';

const TEST_ACTION = 'TEST_ACTION'


const initialState = {

}





export function testAction() {
    return{
        type: TEST_ACTION,
        payload: axios
            .get('/api/test')
            .then(response => response.data)
            .catch(err => err)
    }
}




export default function reducer(state = initialState, action){

}