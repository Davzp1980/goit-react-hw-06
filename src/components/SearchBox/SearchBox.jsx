import { useId } from 'react';
import css from './SearchBox.module.css';
import { setSearchValue } from '../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

function SearchBox({ onSearch }) {
  const searchFieldId = useId();

  const filter = useSelector(state => state.filters.name);
  console.log(filter);

  const dispatch = useDispatch();

  function handleOnChange(e) {
    dispatch(setSearchValue(e.target.value));
  }

  return (
    <div className={css.div}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={searchFieldId}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default SearchBox;
