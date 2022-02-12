import React, {useState} from 'react';


export default function TextForm(props) {
  
const [text,setText] = useState('Enter Your Text Here...');
const UpperCaseHandler = () =>{
  let newText = text.toUpperCase();
  setText(newText);
}
const LowerCaseHandler = ()=>{
  let smallText = text.toLowerCase();
  setText(smallText);
}
const clearAll= ()=>{
  let clearText = '';
  setText(clearText);
}
const HandleOnChange = (event) =>{
  setText(event.target.value);
}
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
    <div className="mb-3">
    <h1>{props.heading} </h1>
        <label for="exampleFormControlTextarea1" className="form-label">{props.tagName}</label>
        <textarea style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} className="form-control" value={text} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={UpperCaseHandler}>Convert to Upper Case</button>
    <button className="btn btn-secondary mx-2"  onClick={LowerCaseHandler}>Convert to Lower Case</button>
    <button className="btn btn-success mx-2"  onClick={clearAll}>Clear Text</button>

    </div>
    <div className="container mt-4 my-2" style={{color:props.mode === 'dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words & {text.length} characters</p>
    <p> It takes {0.008 * text.split(" ").length} Minutes to Reading</p>
    <p> It takes {0.007 * text.split(" ").length} Minutes to Speak</p>

    <h3>Preview</h3>
    <p>{text.length>0?text:'Enter Your text above to preview here!'}</p>
    </div>
    </>
  )
}


