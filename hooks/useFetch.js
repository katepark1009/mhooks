import React, { useEffect, useState } from 'react'


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data);
          setError(null);
          setLoading(false);
        })
        .catch(e => {
          console.warn(e.message);
          setError("Error fetching data. Try again.");
          setLoading(false);
        });
    }, [url]);
  
    return {
      loading,
      data,
      error
    };
  }

  //example 
  function App() {
    const [index, setIndex] = React.useState(0)
  
    const { loading, data: post, error } = useFetch(
      `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
    )
  
    const incrementIndex = () => {
      setIndex((i) => 
        i === postIds.length - 1
          ? i
          : i + 1
      )
    }
  
    if (loading === true) {
      return <p>Loading</p>
    }
  
    if (error) {
      return (
        <React.Fragment>
          <p>{error}</p>
          <button onClick={incrementIndex}>Next Post</button>
        </React.Fragment>
      )
    }
  
    return (
      <div className="App">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {error && <p>{error}</p>}
        {index === postIds.length - 1 
          ? <p>No more posts</p>
          : <button onClick={incrementIndex}>
              Next Post
            </button>}
      </div>
    );
  }
