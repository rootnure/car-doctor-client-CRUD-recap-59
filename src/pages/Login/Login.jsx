import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-[550px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className="text-center lg:text-left w-6/12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-6/12">
                    <h2 className="mt-6 text-3xl text-center font-bold">Login Form</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center mb-6'>New to Car Doctor? <Link to='/signup' className='font-bold text-orange-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;