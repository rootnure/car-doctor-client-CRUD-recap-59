import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-[650px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className="text-center lg:text-left w-6/12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-6/12">
                    <h2 className="mt-6 text-3xl text-center font-bold">SignUp Form</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center mb-6'>Already have and account? <Link to='/login' className='font-bold text-orange-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;