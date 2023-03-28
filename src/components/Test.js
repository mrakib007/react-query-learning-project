// import { useQuery } from 'react-query';
// import { useEffect, useState } from 'react';

// const Test = () => { 
//   const [timer, setTimer] = useState(null);

//   const { data, isFetching, refetch } = useQuery('myData', async () => {
//     const res = await fetch('http://localhost:4000/superheroes');
//     const data = await res.json();
//     return data;
//   });

//   useEffect(() => {
//     if (!isFetching) {
//       setTimer(
//         setTimeout(() => {
//           refetch();
//         }, 3000)
//       );
//     }
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [data, isFetching, refetch, timer]);

//   if (isFetching) return <div>Loading...</div>;

//   return(
//    <div>
//     {JSON.stringify(data)}
//     </div>
//     );
// }
// export default Test;