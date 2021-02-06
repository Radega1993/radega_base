import React from 'react'


export const Contact = () => {

  return (
    <section className="page-section" id="contact">
      <div className="container">

        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contacta</h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">

            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Nombre</label>
                  <input className="form-control" id="name" type="text" placeholder="Nombre" required="required" data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email</label>
                  <input className="form-control" id="email" type="email" placeholder="Email" required="required" data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Teléfono</label>
                  <input className="form-control" id="phone" type="tel" placeholder="Teléfono" required="required" data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Mensaje</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Mensaje" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Enviar</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
