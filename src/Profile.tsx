import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


const Profile = ({ onUpdateProfile }) => {
  const [profile, setProfile] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    picture: ''
  });

  const handlePictureChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prevProfile => ({
          ...prevProfile,
          picture: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onUpdateProfile(profile);
  };

  return(

    <section className="container-fluid">
      <section className="row text-center">

        <section className="col mx-auto">
          <h5>Picture</h5>
          <img src={profile.picture} className="img-fluid" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          <label onClick={handleSubmit} className="btn btn-primary mt-3">Update Picture<input type="file" accept="image/*" onChange={handlePictureChange} style={{ display: 'none' }}/></label>
        </section>
        
        <section className="col mx-auto">
          <h5>Details</h5>
          <input type="text" name="name" className="form-control mb-3" placeholder="Name" />
          <input type="text" name="lastName" className="form-control mb-3" placeholder="Last Name" />
          <input type="text" name="phoneNumber" className="form-control mb-3" placeholder="Phone Number" />
          <input type="email" name="email" className="form-control mb-3" placeholder="Email" />
          <button className="btn btn-primary">Update Info</button>
        </section>

      </section>
    </section>

  )
}

export default Profile