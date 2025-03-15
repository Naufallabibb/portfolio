import React from 'react'
import profile from "../../assets/images/about/profile.png"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I'm Muhammad Naufal Labib Ramadhan, Software Engineer
                                </h2>
                                <p>I'm a Fullstack Developer specializing in building seamless and interactive web applications using React. With a strong background in web development, I create dynamic, responsive, and user-friendly designs that enhance the digital experience.</p>
                                <p>My passion for coding drives me to explore innovative solutions and develop applications that are high-performance, scalable, and visually engaging. I excel at solving complex problems with elegant solutions and continuously stay updated with the latest technologies to deliver future-proof and impactful web applications.</p>
                                <div className="hero-btns">
                                    <a href="https://www.linkedin.com/in/naufallabibb" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery