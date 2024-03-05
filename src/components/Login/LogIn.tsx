import './login.css'
import Validator from './Validator'

const LogIn = () => {
    return ( 
        <> <section className="vh-100 gradient-custom">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Social Creative</h2>
                    <p className="text-white-50 mb-5">powered by Universidad Creativa!</p>

                    <Validator/>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="bi bi-facebook fa-sm"></i></a>
                        <a href="#!" className="text-white"><i className=""></i></a>
                        <a href="#!" className="text-white"><i className=""></i></a>
                    </div>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>

        </>
    )
}

export default LogIn