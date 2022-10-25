import { useEffect, useState } from 'react';

const cachedFetch = {};
const fetchByCache = (url, options = {}) => {
  if (!cachedFetch[url]) {
    cachedFetch[url] = fetch(url, options).then((res) => res.json());
  }

  return cachedFetch[url];
};

export const useFetch = (url) => {
  const [data, setData] = useState();
  console.log('data>>>>>', data);
  useEffect(() => {
    const ctl = new AbortController();
    const { signal } = ctl;
    fetchByCache(url, { signal }).then((data) => {
      console.log('111111111111>>', data);
      setData(data);
    });

    return () => {
      console.log('abooooooooooort!!');
      if (data) ctl.abort();
    };
  }, []);

  return data;
};
