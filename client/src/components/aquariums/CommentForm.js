import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/aquariums";

const CommentForm = ({ aquaId, addComment, toggle }) => {
  const [text, setText] = useState("");

  return (
    <div className='comment-form'>
      <div className='bg-primary p'>
        <h3>Write a Review</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(aquaId, { text });
          setText("");
          toggle();
        }}
      >
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
