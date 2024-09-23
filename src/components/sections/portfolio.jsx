import React, { useState, useEffect } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
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
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [showAll, setShowAll] = useState(false);

    const handleCategoryClick = (item) => {
        setCategory(item);
        setCurrentPage(1);
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
        setShowAll(false);  // Reset showAll state when a new category is selected
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

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = showAll ? filteredProjects : filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                        {currentItems.map(({ category, id, src, title }) => (
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

                    {/* New Layout: Pagination on the left, "Lihat Semua" on the right */}
                    <div className="pagination-button-wrapper" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        {!showAll && totalPages > 1 && (
                            <Pagination 
                                currentPage={currentPage}
                                totalPages={totalPages}
                                paginate={paginate}
                            />
                        )}
                        {!showAll && totalPages > 1 && (
                            <button
                                onClick={() => setShowAll(true)}
                                className="show-all-button"
                            >
                                Lihat Semua
                            </button>
                        )}
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

const Pagination = ({ currentPage, totalPages, paginate }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                        <button onClick={() => paginate(i)} className="page-link">
                            {i}
                        </button>
                    </li>
                );
            }
        } else {
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (startPage > 1) {
                pageNumbers.push(
                    <li key={1} className="page-item">
                        <button onClick={() => paginate(1)} className="page-link">1</button>
                    </li>
                );
                if (startPage > 2) {
                    pageNumbers.push(<li key="start-ellipsis" className="page-item disabled"><span className="page-link"><MoreHorizontal size={16} /></span></li>);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                        <button onClick={() => paginate(i)} className="page-link">
                            {i}
                        </button>
                    </li>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push(<li key="end-ellipsis" className="page-item disabled"><span className="page-link"><MoreHorizontal size={16} /></span></li>);
                }
                pageNumbers.push(
                    <li key={totalPages} className="page-item">
                        <button onClick={() => paginate(totalPages)} className="page-link">
                            {totalPages}
                        </button>
                    </li>
                );
            }
        }

        return pageNumbers;
    };

    return (
        <div className="pagination-container">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button onClick={() => paginate(currentPage - 1)} className="page-link" disabled={currentPage === 1}>
                        <ChevronLeft size={16} />
                    </button>
                </li>
                {renderPageNumbers()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button onClick={() => paginate(currentPage + 1)} className="page-link" disabled={currentPage === totalPages}>
                        <ChevronRight size={16} />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Portfolio;
