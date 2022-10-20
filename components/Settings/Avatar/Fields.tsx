import React from "react"

export const UploadNew: React.FC = ({onChange} : any) => {
    return (
        <div>
            <label>Upload new</label>
            <input 
                type='file'
                onChange={onChange}
            />
        </div>
    )
}

export const BorderRadius: React.FC = ({ onChange }: any) => (
    <div className="form-group">
      <label htmlFor="borderRadius">Border Radius</label>
      <input
        type="range"
        id="borderRadius"
        name="scale"
        onChange={onChange}
        min="0"
        max="50"
        step="1"
        defaultValue="0"
      />
    </div>
  );