import axios from 'axios'

export function registerRequest(data){
  return dispatch => {
     return axios.post('/api/users', {user: data})
  }
}

