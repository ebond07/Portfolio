import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { ReviewWrapper, Testimonial, Modal, ModalContent } from "./ReviewElements";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from 'react-i18next';

function Review() {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    const [formData, setFormData] = useState({
        reviewerName: '',
        reviewContent: '',
        reviewerRelationship: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.reviewerName || !formData.reviewerRelationship || !formData.reviewContent) {
                const formNameError = !formData.reviewerName ? t('review.requiredField') : '';
                const formRelationshipError = !formData.reviewerRelationship ? t('review.requiredField') : '';
                const formExperienceError = !formData.reviewContent ? t(e.target.getAttribute('data-error-key')) : '';

                const errorMessages = `${formNameError}<br>${formRelationshipError}<br>${formExperienceError}`;
                
                if (errorMessages) {
                    Swal.fire({
                        title: t('review.failTitle'),
                        html: errorMessages,
                        icon: 'error',
                        confirmButtonText: t('review.failConfirm')
                    });
                    return;
                }
            }

            const response = await axios.post('https://portfolio-production-f26a.up.railway.app/reviews', formData);
            console.log(response.data);
            Swal.fire({
                title: t('review.successTitle'),
                text: t('review.successText'),
                icon: 'success',
                confirmButtonText: t('review.successConfirm')
            });
            toggleModal();
            setFormData({
                reviewerName: '',
                reviewContent: '',
                reviewerRelationship: ''
            });
        } catch (error) {
            console.error('There was an error submitting the form', error);
            Swal.fire({
                title: t('review.failTitle'),
                text: t('review.failText'),
                icon: 'error',
                confirmButtonText: t('review.failConfirm')
            });
        }
    }

    return (
        <ReviewWrapper id="review">
            <div className="Container">
                <div className="SectionTitle">{t('review.header')}</div>
                <ScrollAnimation animateIn="fadeIn">
                    <Testimonial>
                        <button className="btn PrimaryBtn btn-shadow" onClick={toggleModal}>
                            {t('review.buttonText')}
                        </button>
                    </Testimonial>
                </ScrollAnimation>
                <Modal className={showModal ? 'show' : ''} onClick={toggleModal}>
                    <ModalContent className={showModal ? 'show' : ''} onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="reviewerName">{t('review.formName')}</label>
                            <input 
                                type="text" 
                                id="reviewerName" 
                                name="reviewerName" 
                                value={formData.reviewerName}
                                onChange={handleInputChange}
                                required
                                data-error-key={t('review.requiredField')}
                            />
                            <label htmlFor="reviewerRelationship">{t('review.formRelationship')}</label>
                            <input 
                                type="text" 
                                id="reviewerRelationship" 
                                name="reviewerRelationship" 
                                value={formData.reviewerRelationship}
                                onChange={handleInputChange}
                                required 
                                data-error-key="review.requiredField"
                            />
                            <label htmlFor="reviewContent">{t('review.formExperience')}</label>
                            <textarea
                                id="reviewContent"
                                name="reviewContent"
                                value={formData.reviewContent}
                                onChange={handleInputChange}
                                required
                                data-error-key="review.requiredField"
                            ></textarea>
                            <button type="submit">{t('review.formSubmit')}</button>
                        </form>
                    </ModalContent>
                </Modal>
            </div>
        </ReviewWrapper>
    )
}

export default Review;