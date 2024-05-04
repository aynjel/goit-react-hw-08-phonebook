import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../../redux/filter/filterSlice';
import { selectFilter } from '../../../redux/contacts/contactSelectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  //filter name based on the the search keyword
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.divFilter}>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
