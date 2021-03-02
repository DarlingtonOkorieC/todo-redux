import React from 'react'
import {Checkbox} from '@material-ui/core'
import './TodoItem.css'
import {useDispatch} from 'react-redux'
import {setChecked} from '../features/todoSlice'

function TodoItem({name, done, id}) {
    const dispatch = useDispatch()
    
    const handleChange = () => {
        dispatch(setChecked(id))
    }

    return (
        <div className="todoItem">
            <Checkbox 
            checked={done}
            checkbox={done}
            color="primary"
            onChange={handleChange}
            inputProps={{'aria-label': 'secondary checkbox'}}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
            
        </div>
    )
}

export default TodoItem
