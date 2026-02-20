import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import MoveTrigger from "../../animation/MoveTrigger";
import {Pagination, SwiperOptions} from "swiper";
import {dsnCN} from "../../hooks/helper";


const TestimonialDetails = [
    {
        name: "Emily Brown",
        label: "Brand Manager at Walmart",
        src: "assets/img/avatar/a1.jpg",
        description: `"Working with Red Nebula was seamless, the final video captured out story beautifully and exceeded every expectation from start to finish."`
    },
    {
        name: "Jason Miller",
        label: "Creative Producer at HAECO",
        src: "assets/img/avatar/a2.jpg",
        description: `"The production quality was outstanding, and their ability to translate ideas into meaningful visuals felt genuinely remarkable."`
    },
    {
        name: "Linda Parker",
        label: "Event Coordinator at Sony Music",
        src: "assets/img/avatar/a3.jpg",
        description: `"Their team delivered exceptional visuals that truly elevated our brand message and created a lasting impression with every viewer."`
    },
    {
        name: "Robert Wilson",
        label: "Product Designer at Biscuitville",
        src: "assets/img/avatar/a4.jpg",
        description: `"They understood our vision instantly and crafted a compelling video that perfectly showcased our values and brand personality."`
    },

]


function Testimonial({className, title, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial background-section testimonial-one', className)}>
            <div className="testimonial-inner ">
                <div className="title-box">
                    {title &&
                    <MoveTrigger from={{y: 0, opacity: 0}} to={{y: -60, opacity: 1}} mobile={false}>
                        {(ref) => <h2 className='title-section p-relative z-index-1' ref={ref}>
                            {title}
                        </h2>}
                    </MoveTrigger>
                    }

                </div>
                <div className='content-box'>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable: true, el: '.swiper-pagination'}}
                        slidesPerView={1}
                        {...restProps}
                    >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            src={item.src} authorName={item.name} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>

                                );
                            }
                        )}

                        <div className="swiper-pagination"/>

                    </Swiper>
                </div>

            </div>
        </section>

    )
}


export default Testimonial;