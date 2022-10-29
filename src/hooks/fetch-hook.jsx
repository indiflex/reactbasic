import { useEffect, useState } from 'react';

const cachedFetch = {};
const fetchByCache = (url, { options }) => {
  if (!cachedFetch[url]) {
    cachedFetch[url] = fetch(url, options).then((res) => res.json());
    // .catch(console.error);
  }

  return cachedFetch[url];
};

export const useFetch = (url, defaultData) => {
  const [data, setData] = useState(defaultData);
  console.log('data>>>>>', data);
  useEffect(() => {
    console.log('*******************************');
    if (defaultData) return;
    const ctl = new AbortController();
    const { signal } = ctl;
    fetchByCache(url, { signal }).then((data) => {
      console.log('111111111111>>', data);
      setData(data);
    });

    return () => {
      console.log('abooooooooooort!!', data);
      if (data) ctl.abort();
    };
  }, []);

  return data;
};
