import React, { useState } from 'react'

export default function Forms(props) {

    const onChangee = (event) =>{
        setText(event.target.value)
        
    }

    const copy = ()=>{
        navigator.clipboard.writeText(text)
    }

    const onChangeBtn = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const spaces = ()=>{
        
        var ntext = text.split(/[ ]+/)
        setText(ntext.join(" "))
    }

    const [text, setText] = useState("");

  return (
      <>
    <div>
        <div className="my-3">
            <div><h3>{props.title}</h3></div>
            <textarea className="form-control" value={text} onChange={onChangee} id="myText" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={onChangeBtn}>Convert To UpperCases</button>
        <button className="btn btn-primary mx-2" onClick={copy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={spaces}>Extra Spaces</button>
    </div>
    <div className="container my-3">
        <div className="textA"><h4>Over-All Analysis</h4></div>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{text.split("").length * 0.008} minutes you can take to read the content </p>
    </div>
    </>
  )
}
