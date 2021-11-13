import React from 'react'
export default function Builder(props) {

    const {
        values, submit, change, disabled, errors
    } = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }
    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>
            <div id='name-input'>{errors.name}</div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={onChange} value={values.name}/>
            <label>Choose Your Size
                <select 
                name="size" 
                id="size-dropdown" 
                onChange={onChange}
                value={values.size}>

                <option value="">Select an option</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                </select>

            </label>

            <label >
                <input type="checkbox" name="ham" checked={values.ham} onChange={onChange}/>
            </label>
            <label >
                <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={onChange}/>
            </label>
            <label >
                <input type="checkbox" name="bacon" checked={values.bacon} onChange={onChange}/>
            </label>
            <label >
                <input type="checkbox" name="chicken" checked={values.chicken} onChange={onChange}/>
            </label>
            <label >
                {/* Pineapples don't belong on pizza neither does ranch. */}
                <input type="checkbox" name="pineapple" checked={values.pineapple} onChange={onChange}/>
            </label>
            <label >
                <input type="checkbox" name="" checked={values.sausage} onChange={onChange}/>
            </label>
            <label >
                <input type="checkbox" name="peppers" checked={values.peppers} onChange={onChange}/>
            </label>

            <label>Anything else:
                <input name="more" id="special-text" type="text" onChange={onChange} value={values.special}/>
            </label>

            <button id="order">Order</button>

        </form>
    )
}