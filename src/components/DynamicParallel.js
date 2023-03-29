import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
const DynamicParallel = ({ heroIds }) => {
  //useQueries returns an array of query results
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  return (
    <div>
      This is dynamic parallel with useQueries.
      <div>
        {/* {
            queryResults?.map((result) => console.log(result?.data?.data?.name))
        } */}

        {
            queryResults?.map((result)=>{
                return <div key={result?.data?.data?.id}>{result?.data?.data?.name},{result?.data?.data?.alterEgo}</div>
            })
        }
      </div>
    </div>
  );
};

export default DynamicParallel;
