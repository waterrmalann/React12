import './ToggleButton.css';

const ToggleButton = ({ options, option, setOption }) => {
  return (
    <div className="toggle-buttons">
        { options.map(e => (
            <button type="button" className={option === e && 'toggle-active'} key={e} onClick={() => setOption(e)}>{e}</button>
        ))}
    </div>
  )
}

export default ToggleButton