import axios from 'axios';

const fetchUsers = async (id) => {
    await axios.get(`https://api.github.com/users/${id}`).then(console.log)
    console.log("finish")
}

export {
    fetchUsers
}