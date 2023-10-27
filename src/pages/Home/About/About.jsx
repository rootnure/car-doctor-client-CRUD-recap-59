import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-[500px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-9/12 rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className='absolute -bottom-1/4 right-8 border-[6px] rounded-lg border-white w-5/12' />
                </div>
                <div className='lg:w-1/2 space-y-6'>
                    <h3 className="text-xl text-orange-500 font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning font-bold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;