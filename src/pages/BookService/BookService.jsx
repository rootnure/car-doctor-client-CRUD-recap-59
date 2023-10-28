import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookingService = e => {
        e.preventDefault();
        const form = e.target;
        const order = {
            customerName: form.name.value,
            date: form.date.value,
            email: form.email.value,
            service: _id,
            price,
            message: form.message.value,
            img
        }
        console.log(order);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h2>Book service: {title}</h2>
            <form onSubmit={handleBookingService} className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Amount</span>
                    </label>
                    <input type="text" name="amount" defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered" required disabled />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea name="message" placeholder="Your Message" className="input input-bordered w-full h-32" required></textarea>
                </div>
                <div className="form-control mt-6 col-span-2">
                    <button type="submit" className="btn btn-primary">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default BookService;