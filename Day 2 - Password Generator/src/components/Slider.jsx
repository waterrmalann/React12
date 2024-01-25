import { useState } from 'react'

const Slider = ({ min, max, defaultValue, fromChange, className }) => {
    const [value, setValue] = useState(defaultValue);

    function handleChange(e) {
        const val = e.target.value;
        if (val >= min && val <= max) {
            setValue(val);
            fromChange(val);
        }
    }

    return (
        <div className={className}>
            <input type="range" min={min} max={max} value={value} onChange={handleChange} />
            <p>{value}</p>
        </div>
    )
}

export default Slider;