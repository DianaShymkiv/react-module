export const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
      .then(value => value.json())
}

export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(value => value.json())
}

export const getComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(value => value.json())
}