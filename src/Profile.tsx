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
    <section className="container-fluid">
      <section className="row text-center">
        <h3 className='mb-3'>Account Details</h3>

        <section className="col-md-3 mx-auto text-center">
          <input type="text" name="name" value={profile.name} onChange={handleChange} className="form-control mb-3" placeholder="Name" />
          <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} className="form-control mb-3" placeholder="Last Name" />
          <input type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} className="form-control mb-3" placeholder="Phone Number" />
          <input type="email" name="email" value={profile.email} onChange={handleChange} className="form-control mb-3" placeholder="Email" />
          <label className="btn btn-primary mt-3">Upload Picture<input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} /></label>
        </section>

        <section className="col-md-4 mx-auto text-center">
          <img src={profile.picture} className="img-fluid mb-2" style={{ width: '200px', height: '200px', objectFit: 'contain' }} alt="Profile" />
          <p className='mb-0'>{profile.name} {profile.lastName}</p>
          <p className='mb-0'>{profile.email}</p>
          <p>{profile.phoneNumber}</p>
        </section>
        
      </section>
    </section>
  );
}

export default Profile;
