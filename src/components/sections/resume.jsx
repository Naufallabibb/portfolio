import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                    {/*<!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2021 - 2025'} title={"Engineer's degree, Informatics"} institution={'Ahmad Dahlan University'} />
                                    <Card year={'2018 - 2021'} title={'Natural Sciences'} institution={'Madrasah Aliyah Negeri Kapuas'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}

                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'Sep 2024 - Present'} title={'React Developer'} institution={'Indosat Ooredoo Hutchison Digital Camp'} />
                                    <Card year={'Mar 2024 - Present'} title={'AWS Back-End Academy'} institution={'AWS Dicoding'} />
                                    <Card year={'Aug 2024 - Sep 2024'} title={'Digistar Class Mentee Hustler 2024'} institution={'Digistar Club by Telkom Indonesia'} />
                                    <Card year={'Aug 2023 - Aug 2024'} title={'Project Manager | Full-Stack Developer | Designer Logo | Video Editor'} institution={'Mitra Tani Klaten'} />
                                    <Card year={'Oct 2022 - Mar 2024'} title={'Head of Division of Media Communication, Publication, and Documentation'} institution={'HIPMI-PT UAD'} />
                                    <Card year={'Jan 2024'} title={'Committee and participants of the Dahlan Muda Expo #3 bazaar'} institution={'Ahmad Dahlan University'} />
                                    <Card year={'Sep 2023 - Jan 2024'} title={'Staff Publication, Design, and Decoration Committee'} institution={'EXPO & Bakti Pemuda HIPMI-PT UAD'} />
                                    <Card year={'Nov 2023'} title={'MSIB Batch 6 CAMP UAD Facilitator'} institution={'Ahmad Dahlan University'} />
                                    <Card year={'Aug 2023 - Jan 2024'} title={'Mobile Development'} institution={'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka'} />
                                    <Card year={'Oct 2023'} title={'Head of Publication, Design, and Decoration Committee for Industrial visit PT-Indofon PVC Ceiling Yogyakarta'} institution={'HIPMI-PT UAD'} />
                                    <Card year={'July 2023 - Sep 2023'} title={'Central Committee Media and IT'} institution={'Program Pengenalan Kampus (P2K) Harmoni 2023'} />
                                    <Card year={'Aug 2023'} title={'Head of Publication, Design, and Decoration Committee for Digital Transformation Is the Key to Success for Young Entrepreneurs in the Modern Era'} institution={'HIPMI-PT UAD'} />
                                    <Card year={'Aug 2023'} title={'Head of Publication, Design, and Decoration Committee for Night of familiarity and inauguration'} institution={'HIPMI-PT UAD'} />
                                    <Card year={'Aug 2022 - Oct 2022'} title={'Staff Publication, Design, and Decoration Committee for EXPO Faculty Technology Industri'} institution={'BEM FTI UAD'} />
                                    <Card year={'Aug 2022 - Sep 2022'} title={'Staff Publication, Design, and Decoration Committee for Masa Taaruf Faculty Technology Industri 2022'} institution={'IMM FTI UAD'} />
                                    <Card year={'Aug 2022 - Sep 2022'} title={'Head of Publication, Design and Decoration for the Class of 2021 Informatics Familiarity Night'} institution={'KBM Informatika UAD 2021'} />
                                    <Card year={'July 2022 - Aug 2022'} title={'Staff Publication, Design, and Decoration Committee for Informatics Goes to School '} institution={'BEM FTI UAD'} />
                                    <Card year={'Aug 2021 - Nov 2021'} title={'Staff Steering Committee of the 27th Informatics Family Gathering'} institution={'HMIF UAD'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}