import { useState } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import { Form, Input, Button } from './MoviesSearchForm.styled';

const MoviesSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit">
        <BiSearchAlt size={32} />
      </Button>
      <Input
        onChange={handleChange}
        value={search}
        type="text"
        name="search"
        placeholder="Enter movie title"
      />
    </Form>
  );
};

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default MoviesSearchForm;
