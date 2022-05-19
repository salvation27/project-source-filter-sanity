import React from 'react'
import Checkbox from "@mui/material/Checkbox";

const FilterChekBox = ({tehnology, handelChangeChecked }) => {
 
  return (
    <>
      <div className="checkBox_wrap dflex">
         {tehnology.map(item => {
          return (
            <div key={item._id}>
              <Checkbox
                className="checkbox_custom"
                container="h1"
                color="success"
                onChange={() => handelChangeChecked(item._id)}
                label="Label"
              />
              {item.label}
            </div>
          );
        })} 
      </div>
    </>
  );
};

export default FilterChekBox;