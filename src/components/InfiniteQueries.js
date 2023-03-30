import axios from 'axios';
import React, { Fragment } from 'react';
import { useInfiniteQuery } from 'react-query';

const fetchColors = ({pageParam = 1}) =>{
    //pageParam here refers the page number
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}
const InfiniteQueries = () => {
    const {isLoading,isError,error,data,hasNextPage,fetchNextPage,
        isFetching,isFetchingNextPage} = useInfiniteQuery(['colors'],
    fetchColors,{
        getNextPageParam: (lastPage,pages) =>{
            //pages here refers to an array of API responses
            if(pages.length < 4){
                return pages.length + 1;
            }else{
                return undefined
            }
        },
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
                data?.pages.map((group,index)=>{ //useInfiniteQuery fetches data like this
                    return (
                        <Fragment key={index}>
                            {
                                group.data.map(color =>
                                    <h2 key={color.id}>{color.id} . {color.label}</h2>)
                            }
                        </Fragment>
                    )
                })
            }
        </div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
       <div>
        {isFetching && !isFetchingNextPage ? 'Fetching' : null}
       </div>
        </>
    );
};

export default InfiniteQueries;