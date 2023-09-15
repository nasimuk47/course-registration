/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ selectedCourses }) => {
    const [totalCreditHours, setTotalCreditHours] = useState(0);

    const calculateTotalPrice = () => {
        // Calculate the total price from the selected courses
        return selectedCourses.reduce(
            (total, course) => total + course.price,
            0
        );
    };

    useEffect(() => {
        // Calculate the total credit hours from the selected courses
        const calculatedTotalCreditHours = selectedCourses.reduce(
            (total, course) => total + parseInt(course.credit),
            0
        );

        setTotalCreditHours(calculatedTotalCreditHours);
    }, [selectedCourses]);

    const addToCart = (course) => {
        // Calculate the total credit hours after adding the new course
        const updatedTotalCreditHours =
            totalCreditHours + parseInt(course.credit);

        if (updatedTotalCreditHours > 20) {
            // If total credit hours exceed 20, show a toast message and do not add the course
            toast.error("Total credit hours cannot exceed 20 hours.");
        } else {
            // Otherwise, add the course to the selected courses
            selectedCourses.push(course);
        }
    };

    // Ensure that "Total Credit Hour" does not exceed 20 hours
    const displayTotalCreditHours =
        totalCreditHours > 20 ? 20 : totalCreditHours;

    return (
        <div>
            <div className="text-xl font-medium text-blue-600 mb-3">
                Credit Hour Remaining: {20 - displayTotalCreditHours} hr
            </div>
            <hr />

            <div className="text-xl font-bold mt-7">Selected Courses:</div>

            <ol>
                {selectedCourses.map((course, index) => (
                    <li key={index} className="text-xl">
                        {`${index + 1} ${course.name}`}
                    </li>
                ))}
            </ol>

            <div className="text-xl font-semibold">
                Total Credit Hour: {displayTotalCreditHours} hr
            </div>

            <div className="text-xl font-medium">
                Total Price: {calculateTotalPrice()} <span>USD</span>
            </div>
            <hr />

            {/* Add the ToastContainer to your component */}
            <ToastContainer />
        </div>
    );
};

export default Cart;
