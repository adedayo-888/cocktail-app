import React, { useEffect, useRef } from 'react';

export default function SearchForm({ setSearchTerm }) {
  const searchValue = useRef('');
  useEffect(() => {
    searchValue.current.focus();
  });
  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section>
      <div className='section-title'>
        <form action='' className='form search-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Search for your favourite cocktais</label>
            <input
              type='text'
              name='name'
              id='name'
              onChange={handleChange}
              ref={searchValue}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
