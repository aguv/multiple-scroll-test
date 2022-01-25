import { useEffect, useRef, createRef } from 'react';
import './App.scss';

function App() {
  const scrollRefs = useRef(new Array(3).fill('').map(x => createRef()));

  const handleScroll = e => {
    for (let rf of scrollRefs.current) {
      rf.current.scrollLeft = e.target.scrollLeft;
    }
  }

  useEffect(() => {
    if (scrollRefs && scrollRefs.current) {
      for (let rf of scrollRefs.current) {
        if (rf.current) {
          rf.current.addEventListener('scroll', handleScroll);
        }
      }
    }
  }, []);

  return (
    <div className="App">
      <div ref={scrollRefs.current[0]}>
        <h1>asd123</h1>
        <h1>zxc456</h1>
      </div>
      <div ref={scrollRefs.current[1]}>
        <h1>asd123</h1>
        <h1>zxc456</h1>
      </div>
      <div ref={scrollRefs.current[2]}>
        <h1>asd123</h1>
        <h1>zxc456</h1>
      </div>
    </div>
  );
}

export default App;
