import React from 'react';

const Modal = () => {
    return (
        <div className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
                <p>Your modal content goes here.</p>
                <button  className="btn btn-primary mt-4">Close Modal</button>
            </div>
        </div>
    );
};

export default Modal;