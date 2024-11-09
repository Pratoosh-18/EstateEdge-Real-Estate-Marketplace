import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
    return (
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
            <div className="h-[300px] md:h-[500px]"> 
                <img src="https://assets.architecturaldesigns.com/plan_assets/358796051/large/623314DJ_Render_1702999278.webp" alt="Slide 1" className="object-cover h-full w-full" />
            </div>
            <div className="h-[300px] md:h-[500px]"> 
                <img src="https://assets.architecturaldesigns.com/plan_assets/348164464/large/623193DJ_Render-01.2_1699305294.webp" alt="Slide 2" className="object-cover h-full w-full" />
                
            </div>
            <div className="h-[300px] md:h-[500px]"> 
                <img src="https://assets.architecturaldesigns.com/plan_assets/363604627/large/666278RAF_Render_001_1715780244.webp" alt="Slide 3" className="object-cover h-full w-full" />
                
            </div>
        </Carousel>
    );
};

export default CarouselComponent;