import React, { useEffect, useState } from 'react'

function pageThree() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(()=>{
        fetch(`http://example.com/api/data?page=${currentPage}&limit=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    },[currentPage, itemsPerPage])

    const totalPages = Math.ceil(data.length / itemsPerPage)
    const startIndex = (currentPage -1 )* itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);


  return (
    <div>
        {currentItems.map((item)=>{
            <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.description}</p>
            </div>
        })}
    </div>
  )
}

export default pageThree