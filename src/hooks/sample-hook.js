import { useState } from 'react';

export const useSample = () => {
  const [sample] = useState('SAMPLE');

  return sample;
};
