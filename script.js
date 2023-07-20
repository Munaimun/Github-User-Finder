const APIURL = 'https://api.githhub.com/users/'

getUser('bradtraversy')

function getUser(username) {
    axios (APIURL + username)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
} 