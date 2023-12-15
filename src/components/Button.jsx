
import refresh from '../assets/images/refresh 1.png'
function button({counter, setCounter}) {

  const plus = () => {
    setCounter(counter + 1)
  }

  const minus = () => {
    setCounter(counter - 1)
  }
  const restart = () => {
    setCounter(0)
  }


    return (
      <div className="Button">
         <div className="btn-plus">
             <button className="btn__values" onClick={plus}>
                +
            </button>
          </div>
         <button className="restart" onClick={restart}>
             <img src={refresh} alt="" />
         </button>
         <div className="btn-minus">
            <button className="btn__values-minus" onClick={minus}>
               -
            </button>
        </div>
      </div>
    );
  }
  
  export default button;