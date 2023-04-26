const axios = require('axios');

axios.post('http://localhost:3000/comments', {
    body: 'added from a api using axios',
    postId: 55
})
.then(resp => {
    console.log(resp)
})
.catch(error => {
    console.log(error)
})

axios.get('http://localhost:3000/comments')
    .then(resp => {
        //console.log(resp.data[0].body)
        console.log(resp)
    })
    .catch(error => {
        console.log(error)
    })