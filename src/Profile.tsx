import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  return(
 <>
<section className="container-fluid mt-5">
  <section className="row justify-content-center">
    <section className="col-md-6 text-center">
      <section className="picture">
        <h5>Picture</h5>
        <img src="" className="img-fluid" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
        <input type="file" accept="image/*" className="form-control-file mt-3" />
        <button className="btn btn-primary mt-3">Update Picture</button>
      </section>
    </section>
    
    <section className="col-md-6 text-center">
      <section>
        <h5>Details</h5>
        <input type="text" name="name" className="form-control mb-3" placeholder="Name" />
        <input type="text" name="lastName" className="form-control mb-3" placeholder="Last Name" />
        <input type="text" name="phoneNumber" className="form-control mb-3" placeholder="Phone Number" />
        <input type="email" name="email" className="form-control mb-3" placeholder="Email" />
        <button className="btn btn-primary">Update Info</button>
      </section>
    </section>
  </section>
</section>

  </>

    )
}

export default Profile