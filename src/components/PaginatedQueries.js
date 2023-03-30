import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchColors = (pageNumber) =>{
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}
const PaginatedQueries = () => {
    //it's router is 'rq-paginated'
    const [pageNumber,setPageNumber] = useState(1);
    //in every page query is treated like a brand new query. So it loads every time. 
    //To overcome this React Query has a solution called keepPreviousData
    //React query will maintain the data from last successful fetch
    //And the latest data will be requested in the mean time.
    const {isLoading,isFetching,isError,error,data} = useQuery(['colors',pageNumber],() => fetchColors(pageNumber),{
        keepPreviousData: true,
    })

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <>
        <div>
            {
                data?.data.map((color)=>{
                    return (
                        <div key={color.id}>
                            <h2>{color.id} . {color.label}</h2>
                        </div>
                    )
                })
            }
        </div>
        <div>
            <button onClick={()=> setPageNumber(page=> page - 1)} disabled={pageNumber === 1}>Previous Page</button>
            <button onClick={()=> setPageNumber(page=> page + 1)} disabled={pageNumber === 4}>Next Page</button>
        </div>
        {isFetching && 'Loading...'}
        </>
    );
};

export default PaginatedQueries;