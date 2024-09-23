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
                                    I'm Muhammad Naufal Labib Ramadhan, Front-End MERN Stack Developer.
                                </h2>
                                <p>I'm a Front-End developer specializing in building seamless and interactive web experiences using React. With a solid foundation in the MERN stack, I bring dynamic and responsive designs to life, ensuring an engaging user experience.</p>
                                <p>My passion for coding and web development drives me to continuously explore innovative solutions, crafting web applications that are not only functional but also visually appealing and user-friendly. I thrive on turning complex problems into elegant solutions and constantly keep up with the latest technologies to deliver high-quality, scalable, and future-proof web applications.</p>
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