  import { useRecoilValue, useSetRecoilState } from 'recoil';
  import './App.css'
  import { counterAtom, evenSelector } from './store/atoms/counter';
  import { RecoilRoot } from 'recoil';


  function App() {

    return <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot> 
    </div>
  }


  function Buttons() {
    const setCount = useSetRecoilState(counterAtom);
    function increase() {
      setCount(c => c + 2);
    }

    function decrease() {
      setCount(c => c - 1);
    }

    return <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  }


  function Counter() {
    const count = useRecoilValue(counterAtom);

    return <div>
      {count}
    </div>
  }


  function IsEven() {
    const even = useRecoilValue(evenSelector)

    return <div>
      {even ? "Even" : "Odd"}
    </div>
  }

  export default App;
