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

      // Esta função é utilizada para calcular as posições máxima e mínima ao longo do eixo Y,
      // a fim de evitar a abertura ou fechamento acidental da barra lateral quando o usuário
      // realiza um movimento de arrastar para baixo. A ideia é permitir a abertura apenas se
      // o movimento for lateral, com uma angulação máxima de 30 graus (15 para cima e 15 para baixo).      
      function calcularPosicaoMaxEMinY(catetoAdjacente) {
        // Convertendo o ângulo para radianos
        const anguloRadianos = (Math.PI / 180) * 15;
        
        // Calculando o cateto oposto com base no ângulo
        const catetoOposto = Math.tan(anguloRadianos) * catetoAdjacente;
        
        // Calculando as posições máxima e mínima ao longo do eixo Y
        const posicaoYMax = posicaoY + catetoOposto;
        const posicaoYMin = posicaoY - catetoOposto;
        
        // Retornando as posições calculadas
        return { posicaoYMax, posicaoYMin };
      }

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
