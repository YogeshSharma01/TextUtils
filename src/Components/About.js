import React,{useState} from 'react'

export default function About() {

    const [myStyle, setMystyle] = useState({
        color: 'white',
        backgroundColor : 'black'
    });
    const [btnStye, setBtnStyle] = useState({
        backgroundColor:'primary'
    })
    const [btnText, setBtnText] = useState('Enable Dark Mode');
    const darkMode = ()=>{
        if(myStyle.color === "white"){
            setMystyle({
                color: 'black',
                backgroundColor : 'white'
            })
            setBtnText(" Enable Dark Mode");
            setBtnStyle({
                backgroundColor:'grey',
                border:'none'
            })
        }
            else{
                setMystyle({
                    color: 'white',
                    backgroundColor : 'black',
                    border:'1px solid white'
                })
                setBtnText (" Enable Light Mode");
                setBtnStyle({
                    backgroundColor:'#116DF6',
                    border:'none'
                })
            }
        }
    
    

  return (
    <>
    <div className="container" style={myStyle}>
    <h1>About Us</h1>
      <div className="accordion  my-3" id="accordionExample" style={myStyle}  >
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne" >
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is TextUtils?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            This class serves at a method level the same purpose that a package serves at a class level. one of the uses of textUtils is for example lets say you have a string "apple,banana,orange,pinapple,mango" which doesnt fit inside a given width it can be converted to "Apple, banana, 2 more" .
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           
            For what purpose is TextUtils used?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            It is simply a set of utility functions to do operations on String objects. In fact, the whole class doesn't have any instance fields or methods. Everything is static. Consider it like a container to group functions with a text-based semantic. Many of them could have been methods of a String inherited class or CharSequence inherited class.

            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                what does this TextUtils do?
            </button>
            </h2>
            <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils is a utility which can be used to manipulate your text the way you want.
            </div>
            </div>
        </div>
    </div>
    </div>
    <div className="container">
        <button style={btnStye} className="btn btn-primary" onClick={darkMode}>{btnText}</button>
    </div>
    </>
  )
}
