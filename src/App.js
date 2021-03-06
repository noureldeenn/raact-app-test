import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [repositories, setRepositories] = useState(null);
  const [page, setPage] = useState(1);
  console.log(page)
  const api =axios.create({
    baseURL: `https://api.github.com/search/repositories?q=created:%3e2017-10-22&amp;sort=stars&amp;order=desc&page=${page}`
  })
  useEffect(() => {
    api.get('/').then((res) => setRepositories(res.data.items))
  }, [page])
  return (
    <div>
      <section >
        ll
      {repositories?.map((r) => (
        <div className="card">
          <img src={r?.owner?.avatar_url} alt="Denim Jeans" style={{width: "100%" }} />
            <h1>{r.description}</h1>
            <p className="price">{r.open_issues}</p>
            <p>{r.forks}</p>
            <p><button>{r.full_name}</button></p>
        </div>
        )
      )}
      </section>
      <button style={{margin: "auto"}} onClick={() => setPage(page + 1)}>pagination</button>
    </div>
  );
}

export default App;
