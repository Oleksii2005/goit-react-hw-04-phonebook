import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChange }) => {
  return (
    <label className={css.contactLabel}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={css.contactInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
