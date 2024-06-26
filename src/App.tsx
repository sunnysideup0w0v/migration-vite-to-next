import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';

// next에서 이미지를 가져올 때에는 객체 형태로 가져오기 때문에 .src를 사용해서 수정해주어야한다.
// package.json 파일의 속성을 next.js 속성으로 변경하여 run dev를 해주고 -> next-env.d.ts 신규 생성됨
// 그 뒤에 속성 충돌 방지를 위해 vite-env.d.ts 파일 제거

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo.src} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo.src} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
