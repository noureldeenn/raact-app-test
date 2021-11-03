import { Box } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const api =axios.create({
  baseURL: 'https://api.github.com/search/repositories?q=created:%3e2017-10-22&amp;sort=stars&amp;order=desc'
})

function Repo() {
  const [repositories, setRepositories] = useState(null);
  useEffect(() => {
    api.get('/').then((res) => setRepositories(res.data.items))
  }, [])
  console.log(repositories);
  return (
    <div>
       {repositories?.map((r)=> {
          <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {r?.full_name} 
        </Box>
        })}
    </div>
  );
}

export default Repo;