import { useState, useEffect } from 'react';
import './App.css';
import { ReactComponent as Logo } from './menusButton.svg';
import { ReactComponent as Logotipo } from './logotipo.svg';
import { ReactComponent as Home } from './svg/Home.svg';
import { ReactComponent as EditSquare } from './svg/EditSquare.svg';
import { ReactComponent as Image } from './svg/Image.svg';
import { ReactComponent as Document } from './svg/Document.svg';
import { ReactComponent as Chat } from './svg/Chat.svg';
import { ReactComponent as Category } from './svg/Category.svg';
import { ReactComponent as Bag } from './svg/Bag.svg';
import { ReactComponent as User } from './svg/User.svg';
import { ReactComponent as Setting } from './svg/Setting.svg';
import { ReactComponent as Filter } from './svg/Filter.svg';
import { ReactComponent as Moon } from './svg/moon.svg';
import { ReactComponent as Toogle } from './svg/Toogle.svg';

import { ReactComponent as Logout } from './svg/Logout.svg';



import { NavButton } from './NavButton';


function App() {
  const [exibir, setExibir] = useState(false);
  const style = exibir ? 'exibirDireitaProCima' : '';
  const [selecionado, setSelecionado] = useState(1);

  console.log(selecionado)

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
          const { posicaoYMax, posicaoYMIn } = this.CalcularPosicaoMaxEMinY(catetoAdjacente);
          if ((currentY < posicaoYMax && currentY > posicaoYMIn)) {
            setExibir(true);
          }
        }

        if (posicaoX !== 0 && posicaoX - 50 > currentX) {
          const catetoAdjacente = posicaoX - event.touches[0].clientX;
          const { posicaoYMax, posicaoYMIn } = this.CalcularPosicaoMaxEMinY(catetoAdjacente);

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
    }
  }, []);

  const cliqueDiv = (e, selecionado) => {
    e.preventDefault();
    setSelecionado(selecionado)

    return null;
  }

  const definirSelecionado = (id) => {
    setSelecionado(id);
  }

  return (
    <div className="conteudo">
      <div className={`direita ${style}`} >
        {/* Brand + Nav List */}
        <div className={`brand-navlist`}>
          {/* Brand */}
          <div className={`brand`}>
            <Logotipo width={40} height={40} />
            <div className={`brand-title`}>
              Appli
            </div>
          </div>
          {/* Nav List */}
          <div>
            <NavButton Icon={<Home width={30} height={30} />}
              texto="Dashboard" id={1} selecionado={selecionado === 1} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<EditSquare width={30} height={30} />}
              texto="Posts" id={2} selecionado={selecionado === 2} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<Image width={30} height={30} />}
              texto="Media" id={3} selecionado={selecionado === 3} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<Document width={30} height={30} />}
              texto="Pages" id={4} selecionado={selecionado === 4} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<Chat width={30} height={30} />}
              texto="Commets" id={5} selecionado={selecionado === 5} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<Category width={30} height={30} />}
              texto="Appearance" id={6} selecionado={selecionado === 6} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<Bag width={30} height={30} />}
              texto="Plugins" id={7} selecionado={selecionado === 7} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<User width={30} height={30} />}
              texto="Users" id={8} selecionado={selecionado === 8} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<Setting width={30} height={30} />}
              texto="Settings" id={9} selecionado={selecionado === 9} definirSelecionado={definirSelecionado} />
            <NavButton Icon={<Filter width={30} height={30} />}
              texto="Tools" id={10} selecionado={selecionado === 10} definirSelecionado={definirSelecionado} />
          </div>
          <div className={`botton-nav`}>
            <div className={`darkmode`}>
              <Moon width={33} height={33} />Dark Mode<Toogle width={50} height={50} />
            </div>
            <button className={`buttonLogout`}>  <Logout width={33} height={33} /><div className={`buttonText`}>Logout</div></button>
          </div>
        </div>
      </div>
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
