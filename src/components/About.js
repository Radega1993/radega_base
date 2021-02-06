import React from 'react'


export const About = () => {

  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">

        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="col-lg-4 ml-auto"><p className="lead">Me llamo Raül de Arriba, me apasiona la tecnología y el deporte. Trabajando juntos vamos a conseguir que los proyectos salgan a la luz.</p></div>
          <div className="col-lg-4 mr-auto"><p className="lead">Me especializo en proyectos para pequeñas empresas o nuevas ideas de negocio para ayudarte a crecer!</p></div>
        </div>

        <div className="team-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center mt-3">Tecnologias </h2>
              <p className="text-center lead">Aquí tienes las tecnologias con las que trabajo.</p>
            </div>
            <div className="row people lead">
              <div className="col-md-6 col-lg-4 item">
                <div className="box"><i className="fas fa-laptop-code icon-size text-center"></i>
                  <h3 className="name">Frontend</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Vue JS</li>
                    <li className="list-group-item">React JS</li>
                    <li className="list-group-item">HTLM/CSS/JS</li>
                    <li className="list-group-item">Bootstrap</li>
                    <li className="list-group-item">Flutter</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box"><i className="fas fa-cogs icon-size text-center"></i>
                  <h3 className="name">Backend</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Python</li>
                    <li className="list-group-item">Node JS</li>
                    <li className="list-group-item">MongoBD</li>
                    <li className="list-group-item">SQL</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box"><i className="fas fa-code-branch icon-size text-center"></i>
                  <h3 className="name">System</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Unit Testing</li>
                    <li className="list-group-item">Wordpress</li>
                    <li className="list-group-item">Sysadmin</li>
                    <li className="list-group-item">Linux</li>
                    <li className="list-group-item">Kubernetes</li>
                    <li className="list-group-item">Docker</li>
                    <li className="list-group-item">Traefik</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
