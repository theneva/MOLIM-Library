  import React from 'react'

const Constituent = ({value, sub = 1, sup = 1}) => (
  <span>
    {value}{sub > 1 ? <sub>{sub}</sub> : ''}{sup != 1 ? <sup>{sup}</sup> : ''}
  </span>
);

export default ({constituents}) => (
  <span>
    {constituents.map((constituent, index) => (
      <Constituent key={index} {...constituent}/>
    ))}
  </span>
);
