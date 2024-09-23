import { RiGlobalFill, RiImageEditFill, RiMovie2Fill } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Website Creation"} description={"I specialize in creating fully functional and responsive websites that provide an excellent user experience, tailored to your brand's needs."} />
                        <Card id={2} icon={<RiImageEditFill size={60} />} title={"Design Brand"} description={"I offer brand design services that bring your brand's vision to life, ensuring a cohesive and professional look across all platforms."} />
                        <Card id={3} icon={<RiMovie2Fill size={60} />} title={"Editing Videos"} description={"I provide high-quality video editing services to enhance your content, ensuring engaging and visually appealing results."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}