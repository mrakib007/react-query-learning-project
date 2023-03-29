import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchUserByEmail = (email) =>{
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCoursesByChannelId = (channelId) =>{
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}
const DependentQueries = ({email}) => {
    //here one query depends with another
    const {data: user,isLoading,isFetching,error,isError} = useQuery(['user',email],() => fetchUserByEmail(email))
    const channelId = user?.data?.channelId;
    const {data: courses} = useQuery(['courses',channelId],()=> fetchCoursesByChannelId(channelId),{
        enabled: !!channelId,
    })
     if (isLoading || isFetching) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }
      
    console.log(courses?.data);
    return (
        <div>
            <h2>{courses?.data.id} has these courses</h2>
            {
                courses?.data?.courses.map(course =>{
                    return <div key={course}><p>
                        {course}
                         </p></div>
                })
            }
        </div>
    );
};

export default DependentQueries;