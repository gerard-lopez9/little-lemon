import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Danny Duncan" description="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard name="James Franco" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard name="Justin Bieber" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
             </Carousel>
    )
}