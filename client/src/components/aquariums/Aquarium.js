import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Alert";
import { getAquarium } from "../../actions/aquariums";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Aquarium = ({
  getAquarium,
  aquariums: { aquarium, loading },
  //   aquarium: { _id, description, name, photo, user, likes, comments, date },
  match,
}) => {
  useEffect(() => {
    getAquarium(match.params.id);
  }, [getAquarium]);
  return loading || aquarium === null ? (
    <Spinner />
  ) : (
    <div className='container'>
      <img src={aquarium.photo} />
      <h2 className='text-primary'>{aquarium.name}</h2>
      <p>{aquarium.description}</p>
      <hr />
      <CommentForm aquaId={aquarium._id} />
      <div className='comments'>
        {aquarium.comments &&
          aquarium.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              aquaId={aquarium._id}
            />
          ))}
      </div>
    </div>
  );
};

Aquarium.propTypes = {
  getAquarium: PropTypes.func.isRequired,
  aquariums: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  aquariums: state.aquariums,
});

export default connect(mapStateToProps, { getAquarium })(Aquarium);
