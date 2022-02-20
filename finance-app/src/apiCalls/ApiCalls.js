import axios from 'axios';
  //send data to api
export async function sendPost(e, post, users){
    e.preventDefault();
    let userID;
    await axios.post('/api/v1/addUser', post)
    .then(response => response.data)
    .then(data => userID=data)
    .catch(err => console.log(err.data))
}

export function removeEntry(e, quote){
    e.preventDefault();
    console.log('Removing');
    axios.delete(`/remove:${quote}`)
    .then(response => console.log(response.data))
    .catch(err => console.log(err.data))
}

export function updateEntry(e, entry){
    e.preventDefault();
    console.log('Updating');
    axios.put(`/update:${entry}`)
    .then(response => console.log(response.data))
    .catch(err => console.log(err.data))
}