import '../styles/burguer.css';

const Burguer = (props) => {
    return (
      <div>
         <label onClick={props.toggleMenu} className={`toggle ${props.isOpen ? 'open' : ''}`}>
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
         </label>
      </div>
    )
  }
  
  export default Burguer