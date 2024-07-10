import { useEffect, useState } from "react"


function Page(){
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(()=>{
        fetch(`http://example.com/api/data?page=${currentPage}&limit=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, [currentPage, itemsPerPage])

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex , endIndex);
    return(
        <>
        {
            currentItems.map((item) => {
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                </div>
            })
        }
        </>
    )
}

export default Page;