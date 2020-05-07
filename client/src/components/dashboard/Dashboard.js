import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const Dashboard = ({
  getCurrentProfile,
  auth: { user, id },
  profile: { profile, loading },
  aquarium,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <div class='dash-buttons'>
            <Link to='/edit-profile' class='btn btn-light'>
              <i class='fas fa-user-circle text-primary'></i> Edit Profile
            </Link>
            <Link to={`/profile/${user._id}`} class='btn btn-light'>
              <i class='fas fa-user-circle text-primary'></i> View Profile
            </Link>
            <br />
            <Link to='/aquariums' class='view-aqua btn btn-primary'>
              <i class='fas fa-fish'></i> View Aquariums
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  aquarium: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
