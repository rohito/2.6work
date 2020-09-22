import React from 'react'

const Filter = ({ searchname, onChange }) => {
  return (
    <div>
        filter shown with <input
          value={searchname}
          onChange={onChange}
        />
      </div>
  )
}

export default Filter; 