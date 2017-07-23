import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >

        <input
          id="todoinput"
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
        />

        <button type="submit" id="todosubmit" className="todo-submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;
