import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getAquariums } from "../../actions/aquariums";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import AquaItem from "./AquaItem";

const Aquariums = ({ getAquariums, aquariums: { aquariums, loading } }) => {
  useEffect(() => {
    getAquariums();
  }, [getAquariums]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1 className='large text-primary'>Aquariums</h1>

      <div className=''>
        <h4>Can't find your aquarium?</h4>
        <Link className='btn btn-primary' to='/addaquarium'>
          Add an Aquarium
        </Link>
        <div className='aquariums'>
          {aquariums.map((aquarium) => (
            <AquaItem key={aquarium._id} aquarium={aquarium} />
          ))}
        </div>
      </div>
    </div>
  );
};

Aquariums.propTypes = {
  getAquariums: PropTypes.func.isRequired,
  aquariums: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  aquariums: state.aquariums,
});

export default connect(mapStateToProps, { getAquariums })(Aquariums);
