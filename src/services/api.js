export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
}

export const getUserById = (userId) => {
    return fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(response => response.json())
}

export const getPosts = (userId) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
        .then(response => response.json())
}