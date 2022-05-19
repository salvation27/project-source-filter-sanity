import React from 'react'
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const FilterBtn = ({ list, handleToggle, selectedBasis,bg,color }) => {
  return(
    <ButtonGroup className='btn_groyp' variant="contained" aria-label="small button group">
      <Button style={{background:`${bg}`,color:`${color}`}} className={selectedBasis === null ? 'active' : ''} onClick={()=>handleToggle(null)}>All</Button>
       {
        list.map((item,i)=><Button style={{background:`${bg}`,color:`${color}`}} className={selectedBasis === item.name ? 'active' : ''} onClick={e=>handleToggle(e.target.value)} value={item.name} key={i}>{item.name}</Button>)
      }
    </ButtonGroup>
  )
};

export default FilterBtn