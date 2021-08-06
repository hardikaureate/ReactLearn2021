import {useState} from 'react'

function UseInput() {

    function userInput(initialValue){
        const[value, setValue] = useState(initialValue)
        const reset = () => {
            setValue(initialValue)
        }
        const bind = {
            value,
            onChange: e => {
                setValue(e.target.value)
            }
        }

        return[value, bind, reset]
    }
    return (
        <div>
            
        </div>
    )
}

export default UseInput
