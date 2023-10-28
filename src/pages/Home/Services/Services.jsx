import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="my-12">
            <div className='text-center'>
                <h3 className="text-xl text-orange-500 font-bold">Our Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus dicta,<br />quisquam quia id iure rem rerum omnis. Id, earum!</p>
            </div>
            <div className="grid grid-cols-3 gap-6 my-6">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;