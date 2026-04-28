import '../global.css';
import './Sobre.css';

export function Sobre() {
  return (
    <div className='page'>
        <div className='card'>
            <h1 className='title'>Sobre a Dupla</h1>

      <div className='dev-card'>
        <h3>Isaac Silva Barros</h3>
        <p>Estudante da FAETEC no curso Informática p/ Internet, interessado em aprender sobre programação.</p>
      </div>

      <div className='dev-card'>
        <h3>Alexandre Carvalho Souza Ribeiro de Almeida</h3>
        <p>Terminando curso de Informática p/ internet na FAETEC, tenho uma lógica de programação boa e facilidade para aprender novas linguagens.</p>
      </div>
        </div>
    </div>
  );
};