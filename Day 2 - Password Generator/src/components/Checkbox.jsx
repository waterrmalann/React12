import { useState } from 'react';
import './Checkbox.css';

const Checkbox = ({ className, text, checked, onTick }) => {
    const [ticked, setTicked] = useState(checked ?? false);

    function handleTick(e) {
        const status = e.target.checked;
        setTicked(status);
        onTick(status);
    }

    return (
        <div className={className}> 
            <label className="check-container">{text}
                <input type="checkbox" checked={ticked} onChange={handleTick}/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Checkbox