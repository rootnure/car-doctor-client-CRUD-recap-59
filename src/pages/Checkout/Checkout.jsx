import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData();
    const { title } = service;
    return (
        <div>
            <h2>Book service: {title}</h2>
            <form className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" name="fName" placeholder="First Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" name="lName" placeholder="Last Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Phone</span>
                    </label>
                    <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
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

export default Checkout;