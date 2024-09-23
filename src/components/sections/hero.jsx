import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiInstagramFill, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react';
import profile from "../../assets/images/about/profile.png";
import techstack1 from "../../assets/images/client-logos/techstack1.png";
import techstack2 from "../../assets/images/client-logos/techstack2.png";
import techstack3 from "../../assets/images/client-logos/techstack3.png";
import techstack4 from "../../assets/images/client-logos/techstack4.png";
import techstack5 from "../../assets/images/client-logos/techstack5.png";
import techstack6 from "../../assets/images/client-logos/techstack6.png";
import techstack7 from "../../assets/images/client-logos/techstack7.png";
import techstack8 from "../../assets/images/client-logos/techstack8.png";
import techstack9 from "../../assets/images/client-logos/techstack9.png";
import techstack10 from "../../assets/images/client-logos/techstack10.png";
import techstack11 from "../../assets/images/client-logos/techstack11.png";
import techstack12 from "../../assets/images/client-logos/techstack12.png";
import techstack13 from "../../assets/images/client-logos/techstack13.png";
import techstack14 from "../../assets/images/client-logos/techstack14.png";
import SlideUp from '../../utlits/animations/slideUp';
import Swal from 'sweetalert2';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const texts = ["Front-End MERN Stack Developer", "Full-Stack MERN Stack Developer", "Data Analyst", "Graphic Designer"];

    useEffect(() => {
        let timer;
        const handleType = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, texts]);

    const handleDownload = (url, fileName) => {
        Swal.fire({
            title: 'Anda yakin ingin mengunduh file?',
            text: "File akan segera diunduh setelah Anda mengkonfirmasi.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--primary-color)',
            cancelButtonColor: 'var(--main-color)',
            confirmButtonText: 'Ya, download',
            cancelButtonText: 'Batal',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                icon: 'custom-swal-icon',
                confirmButton: 'custom-swal-confirm-button',
                cancelButton: 'custom-swal-cancel-button',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
    
                Swal.fire({
                    title: 'Berhasil!',
                    text: 'File sedang diunduh.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                        popup: 'custom-swal-popup',
                        title: 'custom-swal-title',
                        htmlContainer: 'custom-swal-text',
                        confirmButton: 'custom-swal-confirm-button',
                        icon: 'custom-swal-icon',
                        backdrop: 'custom-swal-backdrop'
                    }
                });
            }
        });
    };

    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2>Muhammad Naufal Labib Ramadhan</h2>
                                <p className="typing-animation">{text}</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link to="https://instagram.com/naufallabibb_"><RiInstagramFill size={20} /></Link></li>
                                        <li><Link to="https://www.linkedin.com/in/naufallabibb"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link to="https://github.com/Naufallabibb"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                I'm Front-End MERN Stack Developer with a passion for 
                                building seamless and interactive web experiences using React.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Internship or Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <button className="theme-btn" onClick={() => handleDownload('/assets/pdf/cv.pdf', 'Muhammad Naufal Labib Ramadhan_CV.pdf')}>
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </button>
                                    <button className="theme-btn secondary-btn" onClick={() => handleDownload('/assets/pdf/portfolio.pdf', 'Muhammad Naufal Labib Ramadhan_Portfolio.pdf')}>
                                        Download Portfolio <i><RiDownloadLine size={16} /></i>
                                    </button>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>My Development Tools</h2>
                                <div className="company-list">
                                    <div className="scroller" data-animated="true" data-speed="slow">
                                        <div className="scroller__inner">
                                            <img src={techstack1} alt="Tech Stack 1" />
                                            <img src={techstack2} alt="Tech Stack 2" />
                                            <img src={techstack3} alt="Tech Stack 3" />
                                            <img src={techstack4} alt="Tech Stack 4" />
                                            <img src={techstack5} alt="Tech Stack 5" />
                                            <img src={techstack6} alt="Tech Stack 6" />
                                            <img src={techstack7} alt="Tech Stack 7" />
                                            <img src={techstack8} alt="Tech Stack 8" />
                                            <img src={techstack9} alt="Tech Stack 9" />
                                            <img src={techstack10} alt="Tech Stack 10" />
                                            <img src={techstack11} alt="Tech Stack 11" />
                                            <img src={techstack12} alt="Tech Stack 12" />
                                            <img src={techstack13} alt="Tech Stack 13" />
                                            <img src={techstack14} alt="Tech Stack 14" />
                                            {/* Duplicate images for seamless scrolling */}
                                            <img src={techstack1} alt="Tech Stack 1" />
                                            <img src={techstack2} alt="Tech Stack 2" />
                                            <img src={techstack3} alt="Tech Stack 3" />
                                            <img src={techstack4} alt="Tech Stack 4" />
                                            <img src={techstack5} alt="Tech Stack 5" />
                                            <img src={techstack6} alt="Tech Stack 6" />
                                            <img src={techstack7} alt="Tech Stack 7" />
                                            <img src={techstack8} alt="Tech Stack 8" />
                                            <img src={techstack9} alt="Tech Stack 9" />
                                            <img src={techstack10} alt="Tech Stack 10" />
                                            <img src={techstack11} alt="Tech Stack 11" />
                                            <img src={techstack12} alt="Tech Stack 12" />
                                            <img src={techstack13} alt="Tech Stack 13" />
                                            <img src={techstack14} alt="Tech Stack 14" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
