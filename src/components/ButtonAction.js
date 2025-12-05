import {
    useState
} from "react";

export default function ButtonAction() {
    const [button, setButton] = useState(false);
    return ( 
        <div >
        <
        button id = "click"
        onClick = {
            () => setButton(true)
        } >
        Click me 
        </button>

        {
            button && ( 
                <p id = "para" >
                Hello, I 've learnt to use the full-stack evaluation tool. This makes me so happy. 
                </p>
            )
        } 
        </div>
    )
}