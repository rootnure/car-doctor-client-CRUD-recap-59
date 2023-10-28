import PropTypes from 'prop-types';


const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, date, email, service, price, message, img, status } = booking;

    return (
        <>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    {customerName}
                    <br />
                    <div className="text-sm opacity-50">{email}</div>
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-24 h-16 rounded-xl overflow-hidden">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{service}</div>
                            <div className="text-sm opacity-50">{message}</div>
                            <span className="badge badge-ghost badge-sm">${price}</span>
                        </div>
                    </div>
                </td>
                <td>{date}</td>
                <th>
                    {status === 'confirm' ? <p className='text-green-600 font-bold'>Approved</p> : (<button onClick={() => handleBookingConfirm(_id)} className="btn btn-success btn-sm">Confirm?</button>)}
                </th>
            </tr>
        </>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookingConfirm: PropTypes.func.isRequired
}

export default BookingRow;