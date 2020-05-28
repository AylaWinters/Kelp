import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/aquariums";

const CommentForm = ({ aquaId, addComment, toggle }) => {
  const [formData, setFormData] = useState({
    rating: "",
    title: "",
    text: "",
    visit: "",
  });

  const { rating, title, text, visit } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(aquaId, formData);
    toggle();
  };

  return (
    <div className='comment-form'>
      <div className='bg-primary p'>
        <h3>Write a Review</h3>
      </div>
      <form className='form my-1' onSubmit={(e) => onSubmit(e)}>
        <select
          id='rating'
          name='rating'
          required
          onChange={(e) => onChange(e)}
        >
          <option value=''>Rating:</option>
          <option value='1'>1 Fishy</option>
          <option value='2'>2 Fishies</option>
          <option value='3'>3 Fishies</option>
          <option value='4'>4 Fishies</option>
          <option value='5'>5 Fishies</option>
        </select>
        <input
          type='date'
          placeholder='Date of experience'
          name='visit'
          value={visit}
          onChange={(e) => onChange(e)}
          required
        ></input>
        <textarea
          name='title'
          rows='1'
          placeholder='Title for Review'
          value={title}
          onChange={(e) => onChange(e)}
          required
        ></textarea>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Loved it? Hated it? Let the world know!'
          value={text}
          onChange={(e) => onChange(e)}
          required
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
        <button onClick={() => toggle()} className='cancel btn btn-danger'>
          Cancel
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
