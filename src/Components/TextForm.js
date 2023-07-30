import React,{useState} from 'react';
// import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const TextForm = (props) => {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setTaxt(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setTaxt(newText);
    }
    const handleOnChange = (event)=>{
        setTaxt(event.target.value);
    }
    const [text, setTaxt] = useState('Enter text here');
    
    return (
        <>
    <div className='container my-4'>
        <h3 className = {`text-${props.TextFormtextColor.color}`}>{props.header}</h3>
        <div className="mb-3" >
            <textarea className="form-control" onChange= {handleOnChange}value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>
  </div>
  <div className='container my-2'>
  <h1 className = {`text-${props.TextFormtextColor.color}`}>your text summary</h1>
  <p className = {`text-${props.TextFormtextColor.color}`}>{text.split(' ').length} words and {text.length} characters</p>
  </div>
  </>
)}

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;
// #endregion

export default TextForm;