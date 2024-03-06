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
<section className="container-fluid gradient-custom" style={{ minHeight: '100vh', background: 'linear-gradient(45deg, #orange, #darkorange)' }} >
  <section className="row text-center">
    <h3 className='mb-3 text-white'>Account Details</h3>

    <section className="col-md-3 mx-auto text-center">
      <input type="text" name="name" value={profile.name} onChange={handleChange} className="form-control form-control-lg mb-3 form-outline form-white" placeholder="Name" />
      <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} className="form-control form-control-lg mb-3 form-outline form-white" placeholder="Last Name" />
      <input type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} className="form-control form-control-lg mb-3 form-outline form-white" placeholder="Phone Number" />
      <input type="email" name="email" value={profile.email} onChange={handleChange} className="form-control form-control-lg mb-3 form-outline form-white" placeholder="Email" />
      <label className="btn btn-outline-light btn-lg mt-3">Upload Picture<input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} /></label>
    </section>

    <section className="col-md-4 mx-auto text-center">
      <img src={profile.picture} className="img-fluid mb-0" alt="Profile" style={{ width: '200px', height: '200px', objectFit: 'contain'}} />
      <p className='text-white mb-0'>{profile.name} {profile.lastName}</p>
      <p className='text-white mb-0'>{profile.email}</p>
      <p className='text-white'>{profile.phoneNumber}</p>
    </section>
    
  </section>
</section>

  );
}

export default Profile;
