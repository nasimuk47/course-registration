/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ selectedCourses }) => {
    const [totalCreditHours, setTotalCreditHours] = useState(0);

    const calculateTotalPrice = () => {
        return selectedCourses.reduce(
            (total, course) => total + course.price,
            0
        );
    };

    useEffect(() => {
        const calculatedTotalCreditHours = selectedCourses.reduce(
            (total, course) => total + parseInt(course.credit),
            0
        );

        setTotalCreditHours(calculatedTotalCreditHours);

        if (calculatedTotalCreditHours >= 20) {
            toast.error("Total credit hours cannot exceed 20 hours.");
        }
    }, [selectedCourses]);

    const displayTotalCreditHours =
        totalCreditHours > 20 ? 20 : totalCreditHours;

    return (
        <div className="">
            <div className="text-xl font-medium text-blue-600 mb-3">
                Credit Hour Remaining: {20 - displayTotalCreditHours} hr
            </div>
            <hr />

            <div className="text-xl font-bold mt-7 mb-5">Selected Courses:</div>

            <ol>
                {selectedCourses.map((course, index) => (
                    <li key={index} className="text-xl">
                        {`${index + 1} ${course.name}`}
                    </li>
                ))}
            </ol>

            <hr />

            <div className="text-xl font-semibold mt-5">
                Total Credit Hour: {displayTotalCreditHours} hr
            </div>

            <div className="text-xl font-medium mb-5">
                Total Price: {calculateTotalPrice()} <span>USD</span>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;
