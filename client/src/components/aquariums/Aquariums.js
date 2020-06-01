import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAquariums } from "../../actions/aquariums";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import AquaItem from "./AquaItem";
import AOS from "aos";
import "aos/dist/aos.css";

const Aquariums = ({ getAquariums, aquariums: { aquariums, loading } }) => {
  useEffect(() => {
    getAquariums();
  }, [getAquariums]);

  const [searchText, setSearchText] = useState("");

  let filteredAquariums = aquariums.filter((aqua) =>
    aqua.name.toLowerCase().includes(searchText)
  );

  const radioValue = (e) => {
    if (e.target.value === "name") {
      filteredAquariums = aquariums.filter((aqua) =>
        aqua.name.toLowerCase().includes(searchText)
      );
    } else {
      filteredAquariums = aquariums.filter((aqua) =>
        aqua.location.toLowerCase().includes(searchText)
      );
    }
  };

  AOS.init({
    duration: 500,
  });

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className='container'>
        <h1 className='large text-primary'>Aquariums</h1>
        <input
          type='text'
          id='aqua-search'
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          placeholder='Search for Aquariums..'
        />
        <form onChange={(e) => radioValue(e)}>
          <label>
            <input type='radio' name='radio' value='name' checked />
            Name
          </label>
          {"  "}
          <label>
            <input type='radio' name='radio' value='location' />
            Location
          </label>
        </form>
        <div className=''>
          <h4>Can't find your aquarium?</h4>
          <Link className='btn btn-primary' to='/addaquarium'>
            Add an Aquarium
          </Link>
          <br />
        </div>
      </div>
      <div className='aquariums' data-aos='fade-up'>
        {filteredAquariums.map((aquarium) => (
          <AquaItem key={aquarium._id} aquarium={aquarium} />
        ))}
      </div>
    </>
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
