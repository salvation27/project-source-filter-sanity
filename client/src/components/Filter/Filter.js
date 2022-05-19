import React from "react";
import FilterBtn from "./FilterBtn";
import "./Filter.css";
import TextField from "@mui/material/TextField";
import { useStateContext } from "../../context/stateContent";
import FilterChekBox from "./FilterChekBox";

const Filter = () => {
  const {
    filter,
    basis,
    handleSelectBasis,
    selectedBasis,
    category,
    handleSelectCategory,
    selectedCategory,

    site,
    handleSelectSite,
    selectedSite,

    tehnology,
    handelChangeChecked,
    tehCheced,
    inputSearch,
    serchHandelInput,
  } = useStateContext();
  return (
    <div className="filter_wrap">
      <h1>Фильтрация</h1>

      <div className="filter_item filter_item_serch">
        <TextField
          value={inputSearch}
          onChange={serchHandelInput}
          fullWidth
          id="outlined-basic"
          label="Serch"
          variant="outlined"
        />
      </div>
      <div className="filter_item">
        <h4>
          Filter <span>basis </span>: {!selectedBasis ? "all" : selectedBasis}
        </h4>
        <FilterBtn
          color="#fff"
          bg="rgb(51, 55, 177)"
          list={basis}
          handleToggle={handleSelectBasis}
          selectedBasis={selectedBasis}
        />
      </div>

      <div className="filter_item">
        <h4>
          Filter <span>tehnology </span>:{" "}
          {tehCheced.length > 0 &&
            tehCheced.map((item, i) => <span key={i}>{item}, </span>)}
        </h4>
        <FilterChekBox
          tehnology={tehnology}
          handelChangeChecked={handelChangeChecked}
        />
      </div>

      <div className="filter_item">
        <h4>
          Filter <span>category </span>:{" "}
          {!selectedCategory ? "all" : selectedCategory}
        </h4>
        <FilterBtn
          color="#000"
          bg="rgb(171, 247, 185)"
          list={category}
          handleToggle={handleSelectCategory}
          selectedBasis={selectedCategory}
        />
      </div>
      <div className="filter_item">
        <h4>
          Filter <span>site </span>: {!selectedSite ? "all" : selectedSite}
        </h4>
        <FilterBtn
          color="#fff"
          bg="rgb(3, 211, 218)"
          list={site}
          handleToggle={handleSelectSite}
          selectedBasis={selectedSite}
        />
      </div>
      Найдено: {filter.length}
    </div>
  );
};

export default Filter;
