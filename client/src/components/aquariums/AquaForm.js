import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAquarium } from "../../actions/aquariums";
import { Link } from "react-router-dom";

const AquaForm = ({ addAquarium, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    photo: "",
    description: "",
    phone: "",
    website: "",
  });

  const { name, location, photo, description, phone, website } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addAquarium(formData, history);
  };

  return (
    <div className='container'>
      <h1 className='large text-primary'>Add a new Aquarium</h1>
      <p>
        Please search for an aquarium before adding a new one to limit duplicate
        aquariums.
      </p>
      <form onSubmit={(e) => onSubmit(e)} className='form'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name of Aquarium'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Address of Aquarium'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='url'
            placeholder='Website'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='tel'
            size='100'
            placeholder='Phone Number'
            name='phone'
            value={phone}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='link' // file
            accept='image/*,.pdf,.jpg'
            placeholder='Link to Photo of Aquarium'
            name='photo'
            value={photo}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <textarea
            type='text'
            rows='10'
            placeholder='Description of Aquarium'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/aquariums'>
          Go Back
        </Link>
      </form>
    </div>
  );
};

AquaForm.propTypes = {
  addAquarium: PropTypes.func.isRequired,
};

export default connect(null, { addAquarium })(AquaForm);
