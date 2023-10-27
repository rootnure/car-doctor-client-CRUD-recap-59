import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute h-full flex items-center w-2/3 space-y-7 text-white bg-gradient-to-r from-[#111] to-[#07070700] p-12">
                    <div className='w-2/3 space-y-7'>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ipsa dolor nihil ipsam accusamus magnam odio?</p>
                        <div>
                            <button className="btn btn-primary me-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle me-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute h-full flex flex-col justify-center w-1/2 space-y-7 text-white bg-gradient-to-r from-[#111] to-[#07070700] p-12">
                    <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ipsa dolor nihil ipsam accusamus magnam odio?</p>
                    <div>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle me-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute h-full flex flex-col justify-center w-1/2 space-y-7 text-white bg-gradient-to-r from-[#111] to-[#07070700] p-12">
                    <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ipsa dolor nihil ipsam accusamus magnam odio?</p>
                    <div>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle me-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute h-full flex flex-col justify-center w-1/2 space-y-7 text-white bg-gradient-to-r from-[#111] to-[#07070700] p-12">
                    <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ipsa dolor nihil ipsam accusamus magnam odio?</p>
                    <div>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle me-4">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute h-full flex flex-col justify-center w-1/2 space-y-7 text-white bg-gradient-to-r from-[#111] to-[#07070700] p-12">
                    <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ipsa dolor nihil ipsam accusamus magnam odio?</p>
                    <div>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle me-4">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute h-full flex flex-col justify-center w-1/2 space-y-7 text-white bg-gradient-to-r from-[#111] to-[#07070700] p-12">
                    <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ipsa dolor nihil ipsam accusamus magnam odio?</p>
                    <div>
                        <button className="btn btn-primary me-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle me-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;