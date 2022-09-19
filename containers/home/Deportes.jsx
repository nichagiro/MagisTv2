import Image from 'next/image'
import React from 'react'

const Deportes = () => {
  return (
    <section id="services" className="section-deporte">
      <div className="container py-5">
        <header className="section-header-white">
          <h3 className="d-none d-sm-block">DEPORTES</h3>
          <p className="h1 d-none d-sm-block">+ DE 80 CANALES DE DEPORTES DISPONIBLES.</p>
        </header>
        <p className="d-sm-none h1 pb-3 text-white">+ DE 80 CANALES DE DEPORTES DISPONIBLES.</p>
        <div className="row">
          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <p className="description">
              Reúne a tus amigos y familiares para ver tus eventos deportivos favoritos, En MagisTV tenemos una gran
              cantidad de canales de deportes, y canales de Pases exclusivos totalmente gratis en cualquiera de nuestros planes.
            </p>
            <div className="row justify-content-center">
              <div className="col-8 pt-xs-2 col-sm-4" >
                <Image
                  height={48}
                  width={128}
                  src="/img/nba.webp"
                  alt="deporte"
                  sizes="100vw"
                />
              </div>
              <div className="col-8 pt-xs-2 col-sm-4" >
                <Image
                  height={48}
                  width={128}
                  src="/img/game pass.webp"
                  alt="deporte"
                  sizes="100vw"
                />
              </div>
              <div className="col-8 pt-xs-2 col-sm-4" >
                <Image
                  height={48}
                  width={128}
                  src="/img/mlb.webp"
                  alt="deporte"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="d-none d-sm-block pt-xs-2 pt-sm-3 owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item row">
                    <div className="col-4">
                      <Image
                        height={219}
                        width={160}
                        src="/img/fox.webp"
                        sizes="100vw"
                        alt="canal"
                      />
                    </div>
                    <div className="col-4">
                      <Image
                        height={219}
                        width={160}
                        src="/img/espn.webp"
                        sizes="100vw"
                        alt="canal"
                      />
                    </div>
                    <div className="col-4">
                      <Image
                        height={219}
                        width={160}
                        src="/img/being.webp"
                        sizes="100vw"
                        alt="canal"
                      />
                    </div>
                  </div>
                  <div className="testimonial-item row">
                    <div className="col-4">
                      <Image
                        height={219}
                        width={160}
                        src="/img/ufc.webp"
                        sizes="100vw"
                        alt="canal"
                      />
                    </div>
                    <div className="col-4">
                      <Image
                        height={219}
                        width={160}
                        src="/img/tigo.webp"
                        sizes="100vw"
                        alt="canal"
                      />
                    </div>
                    <div className="col-4">
                      <Image
                        height={219}
                        width={160}
                        src="/img/direct tv.webp"
                        sizes="100vw"
                        alt="canal"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center d-sm-none pt-xs-2 pt-sm-3 owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center ">
                      <div className='col-12'>
                        <Image
                          height={219}
                          width={160}
                          src="/img/fox.webp"
                          sizes="100vw"
                          alt="canal"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <Image
                          height={219}
                          width={160}
                          src="/img/espn.webp"
                          sizes="100vw"
                          alt="canal"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <Image
                          height={219}
                          width={160}
                          src="/img/being.webp"
                          sizes="100vw"
                          alt="canal"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <Image
                          height={219}
                          width={160}
                          src="/img/ufc.webp"
                          sizes="100vw"
                          alt="canal"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <Image
                          height={219}
                          width={160}
                          src="/img/tigo.webp"
                          sizes="100vw"
                          alt="canal"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <Image
                          height={219}
                          width={160}
                          src="/img/direct tv.webp"
                          sizes="100vw"
                          alt="canal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deportes