import { useState, useEffect } from 'react';
import './App.css';
import { ReactComponent as Logo } from './menusButton.svg';

function App() {
  const [exibir, setExibir] = useState(false);
  const style = exibir ? 'exibirDireitaProCima' : '';


  useEffect(() => {
    let posicaoX = 0;
    let isTouching = false;

    const handleWindowTouchMove = event => {
      console.log(2)
      if (isTouching) {
        console.log(posicaoX)
        const currentX = event.touches[0].clientX;

        if (posicaoX !== 0 && posicaoX + 50 < currentX) {
          console.log('Arrastou para a direita');
          setExibir(true);
        }


        if (posicaoX !== 0 && posicaoX - 50 > currentX) {
          console.log('Arrastou para a e');
          setExibir(false);
        }
      }
    };

    const handleWindowTouchStart = event => {
      isTouching = true;
      posicaoX = event.touches[0].clientX;

    };

    const handleWindowTouchEnd = () => {
      console.log('Fim do toque');
      isTouching = false;
    };

    window.addEventListener('touchstart', handleWindowTouchStart);
    window.addEventListener('touchmove', handleWindowTouchMove);
    window.addEventListener('touchend', handleWindowTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleWindowTouchStart);
      window.removeEventListener('touchmove', handleWindowTouchMove);
      window.removeEventListener('touchend', handleWindowTouchEnd);
    };
  }, []);




  return (
    <div className="conteudo">
      <div className={`direita ${style}`} ></div>
      <div className='esquerda'>

        <div
          style={{
            display: 'inline-flex',
            paddingTop: '10px',
            paddingRight: '10px',
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <Logo width={50} height={50} onClick={() => setExibir(state => { console.log(state); setExibir(!state) })} />
        </div>
      </div>
    </div >
  );
}

export default App;
