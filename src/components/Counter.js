import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MinusAction, MultiplayAction, PlusAction, DivisionAction} from "../redux/action";
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

const Count =()=>{
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)
    const [number, setNumber] = useState('')
    const [number2, setNumber2] = useState('')
    const plus = ()=>{
        dispatch(PlusAction(+number + +number2))
    }
    const minus = ()=>{
        dispatch(MinusAction(-number - -number2))
    }
    const multiplay = ()=>{
        dispatch(MultiplayAction(number /number2))
    }
    const division = ()=>{
        dispatch(DivisionAction(number * number2))
    }
    const rest = ()=>{
        setNumber('')
        setNumber2('')
        dispatch(DivisionAction(''))
    }

    return(
        <div>
            <div>
                <input type="number"
                    value={number}
                    onChange={({target}) => setNumber(target.value)}
                />
                <input type="number2"
                    value={number2}
                       onChange={({target}) => setNumber2(target.value)}
                />
            </div>
            <div>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={division}>*</button>
                <button onClick={multiplay}>/</button>
                <button onClick={rest}>Restart</button>
            </div>
            {
                !number.length || !number2.length
                ?
                <div>
                    <div/>
                </div>
                :
                <div>{count}</div>

            }

        </div>
    )
}
export default Count;
