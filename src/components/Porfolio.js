import React from 'react'


export const Porfolio = () => {

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">

        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">

            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i>
                  <p className="portfolio-item-caption-content text-center text-white"> Webs personales </p>
                  </div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/personal.png" alt="webs personales" />
              </div>
            </div>


            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i>
                    <p className="portfolio-item-caption-content text-center text-white"> Webs de entretenimiento </p>
                  </div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/game.png" alt="webs de entretenimiento" />
              </div>
            </div>


            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i>
                    <p className="portfolio-item-caption-content text-center text-white"> Webs de negocios </p>
                  </div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/negocio.png" alt="webs de negocios" />
              </div>
            </div>

          </div>
       </div>
    </section>
  )
}
