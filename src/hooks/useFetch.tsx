//
// import React from 'react';
// export const useFetch = (url: string) => {
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState<String | null>(null);
//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url, {});
//         const json = await res.json();
//         setResponse(json);
//       } catch (e) {
//         setError('go error');
//       }
//     };
//     fetchData();
//   }, [url]);
//   return {response, error};
// };
