import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    // text="fdgfhg"  wrong way to change value
    // setText("ashdgfg") //correct way to change value
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
  }
  const copy=()=>{
    // document.getSelection.removeAllRanges();
    // let text =document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success");
  }
  const deleteText=()=>{
    setText("");
    props.showAlert("Text Deleted","success");
  }
  const extraSpaces= ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
    console.log("clicked");
  }
  const handleOnChange = (event)=>{
        console.log("on change");
        console.log(event);
        setText(event.target.value)
    }
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#343a40'}}>
   <h1>{props.heading}</h1>
    
 <div className="mb-3">
  <textarea className="form-control " id="myBox" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'#343a40'}} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={copy}>Copy Text</button>
  <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={deleteText}>Delete Text</button>
  <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={extraSpaces}>Remove Extra Spaces</button>
</div>

<div className="container my-2" style={{color: props.mode==='dark'?'white':'#343a40'}}>
  <h1 >Your Text Summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{if(element.length!==0) return true;else return false;}).length} words and {text.length} characters</p>
  <p>{(text.split(" ").filter((element)=>{if(element.length!==0) return true;else return false;}).length*0.008)} minutes time to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something above to preview"}</p>
</div>
    </>
  )
}
