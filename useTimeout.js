import { useEffect, useRef, useCallback } from 'react';

function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();


  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback])

  useEffect(() => {
    set();

    return clear;
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set])

  return { reset, clear }
}

export default useTimeout;