import React, {useState} from 'react'

const Inputs = ({title, type, disabled = false, helperText, value="", icons, startIcon, endIcon, row}) => {

  const [valueInput, setValueInput] = useState(value);

  const handleChange = (e) => setValueInput(e.target.value);

  return (
    <div className={`inputs ${type}`}>
      <p className={`title`}>{title}</p>
      <p className={`subtitle`}>Label</p>
      {
        !row ? 

          <div className={`inputs-icons ${icons}`}>
            {
              startIcon &&
                <span className="material-icons start">{startIcon}</span>
            }
            <input type="text" placeholder="Placeholder" disabled={disabled} value={valueInput} onChange={handleChange} />
            {
              endIcon &&
                <span className="material-icons end">{endIcon}</span>
            }
          </div>
        :
          <textarea rows={4} />
      }
      {
        helperText &&
        <p className={`helper`}>{helperText}</p>
      }
    </div>
  )
}

export default Inputs