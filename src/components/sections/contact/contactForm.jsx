import React from 'react'
import { RiMailLine } from '@remixicon/react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactForm = () => {
    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form id="contactForm" className="contactForm" name="contactForm" action="#" method="post">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="name">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-control" value="" placeholder="Steve Milner" required="" data-error="Please enter your Name" />
                                    <label for="name" className="for-icon"><i className="far fa-user"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-control" value="" placeholder="hello@websitename.com" required="" data-error="Please enter your Email" />
                                    <label for="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="message">Your Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required="" data-error="Please Write your Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <a href="mailto:muhammadnaufallabibramadhan@gmail.com" className="theme-btn">
                                        Send Me Message <i><RiMailLine size={15} /></i>
                                    </a>
                                    <div id="msgSubmit" className="hidden"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm