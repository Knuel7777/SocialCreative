import React from "react"
import { Link } from "react-router-dom";

function NoPage() {

  return (
    <>
    <section className="vh-100 gradient-custom">
      <section className="container h-100">
        <section className="row d-flex justify-content-center align-items-center h-100">
          <section className="col-12 col-md-8 col-lg-6 col-xl-5">
            <section className="card bg-dark text-white">
              <section className="card-body p-5 text-center">
                <section className="mb-md-5 mt-md-4 pb-5">
                  <h1 className="fw-bold mb-2 text-uppercase">404 - Page Not Found</h1>
                  <p className="text-white-50 mb-5">Sorry, the page you are looking for could not be found.</p>
                  <Link className="btn btn-outline-light btn-lg px-5" to="/Home">Homepage</Link>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
    </>
    
  )
}

export default NoPage
