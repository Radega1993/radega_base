import React from 'react'


export const Footer = () => {

  return (
    <footer className="footer text-center">
     <div className="container">
       <div className="row">

        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">DONDE ESTOY</h4>
          <p className="lead mb-0">
            Me puedes contactar por el formulario
            <br />
            o en las redes sociales
          </p>
        </div>

        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Redes Sociales</h4>
          <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/rauldearriba"><i className="fab fa-fw fa-twitter"></i></a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/radega12/"><i className="fab fa-fw fa-linkedin-in"></i></a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Radega1993"><i className="fab fa-fw fa-github"></i></a>
        </div>

        <div className="col-lg-4">
          <h4 className="text-uppercase mb-4">About</h4>
          <p className="lead mb-0">
            Me llamo Raül de Arriba, me apasiona la tecnología y el deporte. Trabajando juntos vamos a conseguir que los proyectos salgan a la luz.
          </p>
        </div>
      </div>
    </div>
   </footer>
  )
}
