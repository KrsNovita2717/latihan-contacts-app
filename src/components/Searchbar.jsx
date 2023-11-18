import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

function Searchbar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <input 
              type="text"  
              className="search-bar" 
              placeholder={locale === 'id' ? 'Cari berdasarkan nama' : 'Search by name'}
              value={keyword}
              onChange={(event) => keywordChange(event.target.value)}
            />
          )
        }
      }
    </LocaleConsumer>
  )
}

Searchbar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default Searchbar;