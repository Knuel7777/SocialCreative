import React, { useState } from 'react';

const Profile = ({ onUpdateProfile }) => {
  const [profile, setProfile] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    picture: ''
  });

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
  };

  const handleSubmit = () => {
    onUpdateProfile(profile);
  };

  return (
    <section className="vh-100 gradient-custom">
      <section className="container h-100">
        <section className="row d-flex justify-content-center align-items-center h-100">
          <section className="col-12 col-md-6 col-lg-4">
            <section className="card bg-dark text-white" style={{ borderRadius: '25px' }}>
              <section className="card-body p-5">

                <h3 className='fw-bold mb-5 text-uppercase'>Account Details</h3>

                <section className="form-outline form-white mb-4">
                  <input type="text" name="name" value={profile.name} onChange={handleChange} className="form-control form-control-lg" placeholder="Name" />
                </section>
                <section className="form-outline form-white mb-4">
                  <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} className="form-control form-control-lg" placeholder="Last Name" />
                </section>
                <section className="form-outline form-white mb-4">
                  <input type="email" name="email" value={profile.email} onChange={handleChange} className="form-control form-control-lg" placeholder="Email" />
                </section>
                <section className="form-outline form-white mb-4">
                  <input type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} className="form-control form-control-lg" placeholder="Phone Number" />
                </section>

                <section className="d-flex justify-content-center">
                  <label className="btn btn-outline-light btn-lg px-5" style={{ borderRadius: '25px' }}>
                    Upload Picture<input type="file" accept="image/*" name="picture" onChange={handleChange} style={{ display: 'none' }} />
                  </label>
                </section>
              </section>
            </section>
          </section>
          
          <section className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center text-center">
            <section>
              {profile.picture && (
                <img src={profile.picture} alt="Profile" className="img-thumbnail mb-4" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
              )}
              <h4 className='text-black'>{profile.name} {profile.lastName}</h4>
              <p className='text-black'>{profile.email}</p>
              <p className='text-black'>{profile.phoneNumber}</p>
            </section>
          </section>

        </section>
      </section>
    </section>
  );
}

export default Profile;
