import React, { useState } from 'react';

const Profile = ({ onUpdateProfile }) => {
  const [profile, setProfile] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    picture: ''
  });

  const [validationMessages, setValidationMessages] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const validateInput = (name, value) => {
    let message = '';
    switch (name) {
      case 'name':
      case 'lastName':
        if (!/^[a-zA-Z\s]*$/.test(value)) {
          message = `The name cannot contain numbers or special characters.`;
        }
        break;
      case 'phoneNumber':
        if (!/^\d*$/.test(value)) {
          message = 'Phone number not valid.';
        }
        break;
      case 'email':
        if (value && !value.endsWith('@ucreativa.com')) {
          message = 'Email not valid, must be in the ucreativa.com domain.';
        }
        break;
      default:
        break;
    }
    return message;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setProfile(prevProfile => ({
        ...prevProfile,
        picture: URL.createObjectURL(file)
      }));
    } else {
      setProfile(prevProfile => ({
        ...prevProfile,
        [name]: value
      }));
    }

    const message = validateInput(name, value);
    setValidationMessages(prevMessages => ({
      ...prevMessages,
      [name]: message
    }));
  };

  return (
    <section className="vh-100">
      <section className="container h-100">
        <section className="row d-flex justify-content-center align-items-center h-100">
          <section className="col-12 col-md-6 col-lg-4">
            <section className="card bg-dark text-white" style={{ borderRadius: '2.31vh' }}>
              <section className="card-body p-5">
                <h3 className='fw-bold mb-5 text-uppercase'>Account Details</h3>

                <form>
                  <section className="form-outline form-white mb-4">
                    <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} className="form-control form-control-lg" placeholder="Name" />
                    {validationMessages.name && <section className="text-danger">{validationMessages.name}</section>}
                  </section>

                  <section className="form-outline form-white mb-4">
                    <input type="text" id="lastName" name="lastName" value={profile.lastName} onChange={handleChange} className="form-control form-control-lg" placeholder="Last Name" />
                    {validationMessages.lastName && <section className="text-danger">{validationMessages.lastName}</section>}
                  </section>

                  <section className="form-outline form-white mb-4">
                    <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} className="form-control form-control-lg" placeholder="Email" />
                    {validationMessages.email && <section className="text-danger">{validationMessages.email}</section>}
                  </section>

                  <section className="form-outline form-white mb-4">
                    <input type="text" id="phoneNumber" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} className="form-control form-control-lg" placeholder="Phone Number" />
                    {validationMessages.phoneNumber && <section className="text-danger">{validationMessages.phoneNumber}</section>}
                  </section>

                  <section className="d-flex justify-content-center">
                    <label htmlFor="picture" className="btn btn-outline-light btn-lg px-5" style={{ borderRadius: '2.31vh' }}>
                      Upload Picture<input type="file" accept="image/*" id="picture" name="picture" onChange={handleChange} style={{ display: 'none' }} />
                    </label>
                  </section>
                </form>
              </section>
            </section>
          </section>
          
          <section className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center text-center">
            <section>
              {profile.picture && (
                <img src={profile.picture} alt="Profile Preview" className="img-thumbnail mb-4" style={{ width: '18.52vh', height: '18.52vh', borderRadius: '50%' }} />
              )}
              <h4 className='text-black'>{!validationMessages.name && profile.name} {!validationMessages.lastName && profile.lastName}</h4>
              <p className='text-black'>{!validationMessages.email && profile.email}</p>
              <p className='text-black'>{!validationMessages.phoneNumber && profile.phoneNumber}</p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Profile;
