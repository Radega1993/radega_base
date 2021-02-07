import React from 'react';
import { NavLink } from 'react-router-dom'

export const PersonalScreen = () => {

  return (

    <div className="container-fluid">
      <div className="px-lg-5">

        <div className="row py-5">
          <div className="col-lg-12 mx-auto">
            <div className="text-white p-5 shadow-sm rounded banner">
              <h1 className="display-4">Galleria de proyectos de particulares</h1>
              <p className="lead">Aquí encontraras algunos proyectos para personas o particulares.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><a href="http://physical-education-teacher.es"><img src="assets/img/portfolio/personal/pet.png" alt="profesor de educación física" className="img-fluid card-img-top" /> </a>
              <div className="p-4">
                <h5> <a href="http://physical-education-teacher.es" className="text-dark">physical education teacher</a></h5>
                <p className="small text-muted mb-0">Web para un profesor de deporte</p>
                <p className="small text-muted mb-0 mt-3"><a href="http://physical-education-teacher.es"> IR AL SITIO</a></p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><span className="font-weight-bold">WEB</span></p>
                  <div className="badge badge-danger px-3 rounded-pill font-weight-normal">PHP</div>
                  <div className="badge badge-success px-3 rounded-pill font-weight-normal">HTML</div>
                  <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Bootstrap</div>
                  <div className="badge badge-light px-3 rounded-pill font-weight-normal">CSS</div>
                </div>
              </div>
            </div>
          </div>

          {/*
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg" alt="" className="img-fluid card-img-top"/>
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Blorange</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
                  <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" alt="" className="img-fluid card-img-top" />
              <div className="p-4">
                <h5> <a href="#" className="text-dark">And She Realized</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
                  <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg" alt="" className="img-fluid card-img-top" />
              <div className="p-4">
                <h5> <a href="#" className="text-dark">DOSE Juice</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPEG</span></p>
                  <div className="badge badge-success px-3 rounded-pill font-weight-normal">Hot</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294926/cody-davis-253925-unsplash_hsetv7.jpg" alt="" className="img-fluid card-img-top" />
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Pineapple</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
                  <div className="badge badge-primary px-3 rounded-pill font-weight-normal">New</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg" alt="" className="img-fluid card-img-top" />
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Yellow banana</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
                  <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/mike-meyers-737494-unsplash_yd11yq.jpg" alt="" className="img-fluid card-img-top"/>
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Teal Gameboy</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPEG</span></p>
                  <div className="badge badge-info px-3 rounded-pill font-weight-normal">Hot</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294930/ronald-cuyan-434484-unsplash_iktjid.jpg" alt="" className="img-fluid card-img-top"/>
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Color in Guatemala.</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
                  <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294929/matthew-hamilton-351641-unsplash_zmvozs.jpg" alt="" className="img-fluid card-img-top"/>
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Red paint cup</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
                  <div className="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg" alt="" className="img-fluid card-img-top" />
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Lorem ipsum dolor</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
                  <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" alt="" className="img-fluid card-img-top" />
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Lorem ipsum dolor</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
                  <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg" alt="" className="img-fluid card-img-top" />
              <div className="p-4">
                <h5> <a href="#" className="text-dark">Lorem ipsum dolor</a></h5>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPEG</span></p>
                  <div className="badge badge-success px-3 rounded-pill font-weight-normal">Hot</div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
        <div className="py-5 text-right">
          <NavLink
              activeClassName="active"
              className="btn btn-dark px-5 py-3 text-uppercase"
              exact
              to="/"
          >
            Volver al inicio
          </NavLink>
        </div>
      </div>
    </div>
  )
}
