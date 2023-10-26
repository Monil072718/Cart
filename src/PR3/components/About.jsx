import React from 'react'
import '../components/style.css'

export function About() {
    return (
        <section class="ftco-section ftco-wrap-about">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 d-flex">
                        <div class="img img-2 mr-md-2 about-2" ></div>
                        <div class="img img-1 ml-md-2 about-1" ></div>
                    </div>
                    <div class="col-md-5 wrap-about pt-5 pt-md-5 pb-md-3 ftco-animate">
                        <div class="heading-section mb-4 my-5 my-md-0">
                            <span class="subheading">About</span>
                            <h2 class="mb-4">Feliciano Restaurant</h2>
                        </div>
                        <p className='about-para'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p class="time">
                            <span>Mon - Fri <strong>8 AM - 11 PM</strong></span>
                            <span><a href="" className='about-no'>+ 1-978-123-4567</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default About;