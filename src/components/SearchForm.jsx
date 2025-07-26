import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm , searchTerm} = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    setSearchTerm(searchValue);
  }

  return (
   <section>
      <h1 style={{fontStyle:'italic', fontFamily:'fangsong'}} className='title'>{searchTerm} images</h1>

      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
