import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../hooks/fetch-hook';

// const SAMPLE_URL = '/data/sample.json';

// const cached = {};
// const fetchByCache = (url) => {
//   if (!cached[url]) {
//     cached[url] = fetch(url).then((res) => res.json());
//   }

//   return cached[url];
// };

export const Sample = () => {
  // const [session, setSession] = useState();
  const [array, setArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [, rerender] = useState();
  const memoArray = useMemo(() => array, [array]);

  useEffect(() => {
    console.log('effect Array!!!');
    const tot = memoArray.reduce((sum, a) => sum + a, 0);
    setTotalPrice(tot);
  }, [memoArray]);

  // const data = useFetchByCache(SAMPLE_URL);

  // const getData = () => {
  //   fetchByCache(SAMPLE_URL).then((data) => setSession(data));
  // };

  // const getData2 = () => {
  //   fetchByCache(SAMPLE_URL + '?aaa').then((data) => setSession(data));
  // };

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   fetch(SAMPLE_URL, { signal })
  //     .then((res) => {
  //       console.log(res.status);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log('data>>', data);
  //       setSession(data);
  //     });

  //   return () => controller.abort();
  // }, []);

  return (
    <>
      {/* <div>{JSON.stringify(session)}</div> */}
      <input type='text' onChange={rerender} />
      {/* <button onClick={getData}>Get Data</button>
      <button onClick={getData2}>Get Data2</button> */}
      <div>
        {totalPrice}
        <button onClick={() => setArray([...array, 1])}>PushArray</button>
      </div>
    </>
  );
};
