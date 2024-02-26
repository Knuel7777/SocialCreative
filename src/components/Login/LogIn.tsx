import './login.css'

const LogIn = () => {
    return ( 
        <section className="vh-100 gradient-custom">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white">
                    <div className="card-body p-5 text-center">

                        <div className="mb-md-5 mt-md-4 pb-5">

                        <h2 className="fw-bold mb-2 text-uppercase">Social Creative</h2>
                        <p className="text-white-50 mb-5">powered up by Universidad Creativa!</p>

                        <div className="form-outline form-white mb-4">
                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                        </div>

                        <div className="form-outline form-white mb-4">
                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                        </div>

                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" className="text-white"><i className="bi bi-facebook fa-sm"></i></a>
                            <a href="#!" className="text-white"><i className=""></i></a>
                            <a href="#!" className="text-white"><i className=""></i></a>
                        </div>

                        </div>

                        <div>
                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                        </p>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}

export default LogIn