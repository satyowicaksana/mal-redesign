import { useState, useEffect, useRef, useCallback } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const useScroll = () => {
  const [state, setState] = useState({
    lastScrollTop: 0,
    bodyOffset: document.body.getBoundingClientRect(),
    scrollY: document.body.getBoundingClientRect().top,
    scrollX: document.body.getBoundingClientRect().left,
    scrollDirection: '', // down, up
  })

  const handleScrollEvent = useCallback((e) => {
    setState((prevState) => {
      const prevLastScrollTop = prevState.lastScrollTop
      const bodyOffset = document.body.getBoundingClientRect()

      return {
        lastScrollTop: -bodyOffset.top,
        bodyOffset: bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? 'down' : 'up',
      }
    })
  }, [])

  useEffect(() => {
    const scrollListener = (e: Event) => {
      handleScrollEvent(e)
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [handleScrollEvent])

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
  }
}
