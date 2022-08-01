import { useEffect, useRef } from 'react';

function useStrictUpdateEffect(callback, dependencies) {
  const firstRender = useRef(true);
  const strictMode = useRef(0)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      strictMode.current = 1
      return
    }
    if(strictMode.current === 1) {
      strictMode.current = 2
      return
    }
    
    return callback()
  }, dependencies)
}

export default useStrictUpdateEffect;