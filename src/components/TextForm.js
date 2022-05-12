// import React, from 'react'
import React, {useState} from'react'

 function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () =>{
    // console.log("Uppercase was clicked : " + text);
    let newText = " ";
    setText(newText)
  }
  
  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to  change the State
  // setText = ("new text"); // Correct way to  change the State
  return (
    <>
    <div className ="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" value={text} onChange={handleOnChange}rows="8"></textarea>
            </div>
            <button className="btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
             <button className="btn-primary mx-2" onClick={handleCopy}>Copy Text</button> 
             <button className="btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
            
    </div>
    <div className ="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summry</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
export default TextForm;