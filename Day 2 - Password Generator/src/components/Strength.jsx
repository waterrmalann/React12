import './Strength.css';
import { getStrength } from '../utils/checkStrength.js';

const Strength = ({ password }) => {
  const { score, rating } = getStrength(password);

  const bars = Array.from({ length: 4 }, (_, index) => (
    <div key={index} className={index < score ? 'active' : 'inactive'}></div>
  ));

  return (
    <div className="strength-box">
      <h2>Strength</h2>
      <div>
        <h2>{rating}</h2>
        <div className="strength-bars">
          {bars}
        </div>
      </div>
    </div>
  )
}

export default Strength