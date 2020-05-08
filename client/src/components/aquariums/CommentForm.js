import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/aquariums";

const CommentForm = ({ aquaId, addComment, toggle }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div className='comment-form'>
      <div className='bg-primary p'>
        <h3>Write a Review</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(aquaId, { text, rating });
          setText("");
          toggle();
        }}
      >
        <select
          id='rating'
          name='rating'
          required
          onChange={(e) => setRating(e.target.value)}
        >
          <option value=''>Rating:</option>
          <option value={1}>1 Fishy</option>
          <option value='2'>2 Fishies</option>
          <option value='3'>3 Fishies</option>
          <option value='4'>4 Fishies</option>
          <option value={5}>5 Fishies</option>
        </select>

        {/* <textarea
          name='rating'
          cols='1'
          rows='1'
          placeholder='Rating'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        ></textarea> */}

        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Loved it? Hated it? Let the world know!'
          value={text}
          onChange={(e) => setText(e.target.value)}
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
