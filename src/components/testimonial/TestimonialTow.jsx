import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {SwiperOptions} from "swiper";
import ControlNav from "../slider-portfolio/ControlNav";
import {dsnCN} from "../../hooks/helper";

const TestimonialDetails = [
    {
        authorName: "Emily Brown",
        label: "Brand Manager at Walmart",
        description: `"Working with Red Nebula was seamless, the final video captured out story beautifully and exceeded every expectation from start to finish."`
    },
    {
        authorName: "Jason Miller",
        label: "Creative Producer at HAECO",
        description: `"The production quality was outstanding, and their ability to translate ideas into meaningful visuals felt genuinely remarkable."`
    },
    {
        authorName: "Linda Parker",
        label: "Event Coordinator at Sony Music",
        description: `"Their team delivered exceptional visuals that truly elevated our brand message and created a lasting impression with every viewer."`
    },
    {
        authorName: "Robert Wilson",
        label: "Product Designer at Biscuitville",
        description: `"They understood our vision instantly and crafted a compelling video that perfectly showcased our values and brand personality."`
    },
]


function TestimonialTow({className, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial testimonial-tow', className)}>
            <div className="testimonial-inner">
                <div className='content-box'>
                    <Swiper slidesPerView={1} {...restProps} >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            authorName={item.authorName} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>
                                );
                            }
                        )}
                        <ControlNav/>

                    </Swiper>
                </div>
            </div>
        </section>

    )
}


export default TestimonialTow;