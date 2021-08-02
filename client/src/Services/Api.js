const Api = {}


Api.getBooks = (book) => {
   return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}&orderBy=relevance&key=${process.env.REACT_APP_API_KEY}&maxResults=20`
  )
    .then((response) => {
      return response.json();
    })
}


export default Api


