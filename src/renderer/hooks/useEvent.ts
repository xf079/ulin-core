import mitt from 'mitt';
import { useEffect } from 'react';

const emitter = mitt();

export const useEvent = () => {
  useEffect(() => {
    return () => {
      emitter.all.clear();
    };
  }, []);
  return emitter;
};
