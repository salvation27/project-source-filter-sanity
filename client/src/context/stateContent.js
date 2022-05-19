import React, { createContext, useContext, useState, useEffect } from "react";
import { clientSanity } from "../clientsanity";


const context = createContext();

export const StateContext = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState([]);

  // для фильтра basis
  const [basis, setBasis] = useState([]);
  const [selectedBasis, setSelectBasis] = useState(null);
  // для фильтра category
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectCategory] = useState(null);
  // для фильтра site
  const [site, setSite] = useState([]);
  const [selectedSite, setSelectSite] = useState(null);
  // для фильтра tehnology по чекбоксу
  const [tehnology, setTehnology] = useState([]);
  const [tehCheced, setTehCheced] = useState([]);
  // для фильтра по input полю
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const query = `*[_type == "posts"] {
       title,
       text,
       _id,
       mainImage{asset->{url}},
       basis->{name,image{asset->{url}}},
       category->{name,image{asset->{url}}},
       site->{name,image{asset->{url}}},
       tehnology->{label,image{asset->{url}}},
       notes,
       linkProgect,
       linkGit,
       linkYoutybe,
       slug,
       publishedAt
      }`;
    clientSanity.fetch(query).then((data) => {
      setPosts(data);
      setFilter(data);
    });

    const query1 = `*[_type == "basis"] {
      name,image{asset->{url}}
      }`;
    clientSanity.fetch(query1).then((data) => {
      setBasis(data);
    });

    const query2 = `*[_type == "category"] {
      name,image{asset->{url}}
      }`;
    clientSanity.fetch(query2).then((data) => {
      setCategory(data);
    });

    const query3 = `*[_type == "site"] {
      name,image{asset->{url}}
      }`;
    clientSanity.fetch(query3).then((data) => {
      setSite(data);
    });

    const query4 = `*[_type == "tehnology"] {
      label,
      image{asset->{url}},
      checked,
      _id
      }`;
    clientSanity.fetch(query4).then((data) => {
      setTehnology(data);
    });
  }, []);

  const serchHandelInput = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSelectBasis = (value) => {
    setSelectBasis(value);
  };

  const handleSelectCategory = (value) => {
    setSelectCategory(value);
  };

   const handleSelectSite = (value) => {
     setSelectSite(value);
     console.log("selectedSite", selectedSite);
   };

  const handelChangeChecked = (id) => {
    const tehnologyStateList = tehnology;
    const chengeChecedTehnology = tehnologyStateList.map((item) =>
      item._id === id ? { ...item, checked: !item.checked } : item
    );
    setTehnology(chengeChecedTehnology);
  };

  const applyFilters = () => {
    let updatedList = posts;

    // фильтр чекбоксы
    const tehnologyCheced = tehnology
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    setTehCheced(tehnologyCheced); // для визуального отображения какие чекбоксы включены отображения

    if (tehnologyCheced.length) {
      updatedList = updatedList.filter((item) =>
        tehnologyCheced.includes(item.tehnology.label)
      );
    }
    // фильтр чекбоксы

    // фильтер по категориям по кнопкам
    if (selectedBasis) {
      updatedList = updatedList.filter(
        (item) => item.basis.name === selectedBasis
      );
    }
    // фильтер по категориям по кнопкам
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category.name === selectedCategory
      );
    }
    // фильтер по категориям по кнопкам
    if (selectedSite) {
      updatedList = updatedList.filter(
        (item) => item.site.name === selectedSite
      );
    }
    // фильтер по категориям по кнопкам

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setFilter(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedBasis, selectedCategory,selectedSite, tehnology, inputSearch]);

  return (
    <context.Provider
      value={{
        posts,
        filter,
        setPosts,
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
        serchHandelInput,
        inputSearch,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
