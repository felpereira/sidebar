import { useState, useEffect } from 'react';
import './App.css';
import { ReactComponent as Logo } from './menusButton.svg';

function App() {
  const [exibir, setExibir] = useState(false);
  const style = exibir ? 'exibirDireitaProCima' : '';


  useEffect(() => {
    let posicaoX = 0;
    let posicaoY = 0;
    let isTouching = false;

    const handleWindowTouchMove = event => {
      if (isTouching) {

        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY

        if (posicaoX !== 0 && posicaoX + 50 < currentX) {
          const catetoAdjacente = event.touches[0].clientX - posicaoX
          const { posicaoYMax, posicaoYMIn } = CalcularPosicaoMaxEMinY(catetoAdjacente);
          if ((currentY < posicaoYMax && currentY > posicaoYMIn)) {
            setExibir(true);

          }
        }


        if (posicaoX !== 0 && posicaoX - 50 > currentX) {
          const catetoAdjacente = posicaoX - event.touches[0].clientX;
          const { posicaoYMax, posicaoYMIn } = CalcularPosicaoMaxEMinY(catetoAdjacente);

          if ((currentY < posicaoYMax && currentY > posicaoYMIn)) {
            setExibir(false);
          }

        }
      }

      function CalcularPosicaoMaxEMinY(catetoAdjacente) {
        const anguloRadianos = (Math.PI / 180) * 15;
        const catetoOposto = Math.tan(anguloRadianos) * catetoAdjacente;

        const posicaoYMax = posicaoY + catetoOposto;
        const posicaoYMIn = posicaoY - catetoOposto;
        return { posicaoYMax, posicaoYMIn };
      }
    };

    const handleWindowTouchStart = event => {
      isTouching = true;
      posicaoX = event.touches[0].clientX;
      posicaoY = event.touches[0].clientY;

    };

    const handleWindowTouchEnd = () => {
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
          <Logo width={50} height={50} onClick={() => setExibir(!exibir)} />





        </div >


      </div >
    </div >
  );
}

export default App;
