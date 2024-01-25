import { FaCopy } from 'react-icons/fa';
import './Card.css';
import Slider from './Slider';
import Checkbox from './Checkbox';
import { useState } from 'react';
import Strength from './Strength';
import { generatePassword } from '../utils/genPassword.js';
import { copyToClipboard } from '../utils/clipboard.js';

const Card = () => {
  const [requirements, setRequirements] = useState({
    length: 8,
    uppercase: true,
    lowercase: true,
    digits: true
  });

  const setLength = (length) => setRequirements((prev) => ({ ...prev, length: length }));
  const setUppercaseTick = (ticked) => setRequirements((prev) => ({ ...prev, uppercase: ticked }));
  const setLowercaseTick = (ticked) => setRequirements((prev) => ({ ...prev, lowercase: ticked }));
  const setDigitsTick = (ticked) => setRequirements((prev) => ({ ...prev, digits: ticked }));

  const [password, setPassword] = useState(() => generatePassword(
    requirements.length, 
    requirements.uppercase, 
    requirements.length, 
    requirements.digits  
  ));

  function generateOnClick() {
    const newPassword = generatePassword(
      requirements.length, 
      requirements.uppercase, 
      requirements.length, 
      requirements.digits
    );

    setPassword(newPassword);
  }

  return (
    <>
      <div className="card">
        <div className="card-input">
          <input type="text" value={password} />
          <FaCopy className="clipboard-btn" onClick={() => copyToClipboard(password)} size={30} />
        </div>
      </div>
      <div className="card">
        <label><h3>Character Length:</h3>
          <Slider defaultValue={requirements.length} fromChange={setLength} val className="length-slider" min={5} max={25} />
        </label>
        <div>
          <Checkbox
            onTick={setUppercaseTick}
            checked={requirements.uppercase}
            className="checkbox"
            name="uppercase"
            text="Include Uppercase"
          />
          <Checkbox
            onTick={setLowercaseTick}
            checked={requirements.lowercase}
            className="checkbox"
            name="lowercase"
            text="Include Lowercase"
          />
          <Checkbox
            onTick={setDigitsTick}
            checked={requirements.digits}
            className="checkbox"
            name="digits"
            text="Include Digits"
          />
        </div>
        <Strength password={password} />
        <button onClick={generateOnClick} className="btn">Generate</button>
      </div>
    </>
  )
}

export default Card