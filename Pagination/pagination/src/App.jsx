import { useEffect, useState } from 'react'
// import Counter from './assets/Counter';
// import CounterIncDec from './assets/CounterIncDec';


function App() {
  
  /*
  const [data, setData] = useState([]); // initialized state for a data

  const [currentPage, setCurrentPage] = useState(1); // current page number
  const [itemsPerPage, setItemsPerPage] = useState(10);  // items to per page

  useEffect(()=>{  // useEffect to fetch data from server
    fetch(`http://example.com/api/data?page=${currentPage}&limit=${itemsPerPage}`) // api call
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [currentPage, itemsPerPage])

  const totalPages = Math.ceil(data.length / itemsPerPage);  // total pages
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
*/
  return (
    <>
    
    {/* render fetched data

    {currentItems.map(item => {
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.description}</p>
      </div>
    })} */}

    {/* <Counter/> */}
    {/* <CounterIncDec/> */}
  
    </>
  )
}

export default App
