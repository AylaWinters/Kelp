import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = ({
  getCurrentProfile,
  auth: { user, id },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  AOS.init({
    duration: 2000,
  });

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='dash-back'>
      <div className='container' data-aos='fade-right'>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <>
            <div className='dash-buttons'>
              <Link to='/edit-profile' className='btn btn-light'>
                <i className='fas fa-user-circle text-primary'></i> Edit Profile
              </Link>
              <Link to={`/profile/${user._id}`} className='btn btn-light'>
                <i className='fas fa-user-circle text-primary'></i> View Profile
              </Link>
              <br />
              <Link to='/aquariums' className='view-aqua btn btn-primary'>
                <i className='fas fa-fish'></i> View Aquariums
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
      <div className='dash-dia'></div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
