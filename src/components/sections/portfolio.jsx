import React, { useState, useEffect } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import { projectsData } from '../../utlits/fackData/projectData';
import SlideUp from '../../utlits/animations/slideUp';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');
    const [modalImage, setModalImage] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCategoryClick = (item) => {
        setCategory(item);
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    };

    const openModal = (src) => {
        setModalImage(src);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        if (isModalVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalVisible]);

    // Filter unique categories
    const filteredCategory = ["All", ...new Set(projectsData.map(project => project.category))];

    const filteredProjects = category === 'All' 
        ? projectsData 
        : projectsData.filter(image => image.category === category);

    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Works & Projects</h2>
                                    <p>
                                        Explore my design projects, carefully crafted with precision and passion, covering websites, 
                                        user interfaces, Android apps, logos, social media feeds, posters, and certificates.
                                    </p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <SlideUp>
                        <ul className="project-filter filter-btns-one justify-content-left pb-15">
                            {filteredCategory.map((item, id) => (
                                <li 
                                    key={id} 
                                    onClick={() => handleCategoryClick(item)} 
                                    className={item === category ? "current" : ""}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {filteredProjects.map(({ category, id, src, title }) => (
                            <Card 
                                key={id} 
                                id={id} 
                                category={category} 
                                src={src} 
                                title={title} 
                                animationClass={animationClass}
                                openModal={openModal}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={`modal ${isModalVisible ? 'visible' : ''}`} onClick={closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    {modalImage && <img src={modalImage} alt="Project" style={{ width: '100%', height: 'auto' }} />}
                </div>
            </div>
        </section>
    );
};

const Card = ({ category, title, src, animationClass, id, openModal }) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        <img src={src} alt="Project" loading="lazy"/>
                        <button onClick={() => openModal(src)} className="details-btn">
                            <RiArrowRightUpLine />
                        </button>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3>{title}</h3>
                    </div>
                </div>
            </SlideUp>
        </div>
    );
};

export default Portfolio;