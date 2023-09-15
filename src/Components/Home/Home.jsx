/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
    const [allcard, setAllCard] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCard(data));
    }, []);

    return (
        <div className="">
            <h2 className="mt-5 p-4 bg-gray-50 flex justify-center text-3xl font-bold">
                Course Registration
            </h2>

            <div className="flex ">
                <div className="w-9/12 grid  grid-cols-3 ">
                    {allcard.map((singlecard) => (
                        <div key={singlecard.id} className=" ">
                            <div className="card w-80  bg-base-100 shadow-xl rounded-xl mt-10 ">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={singlecard.img}
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl font-bold mt-2">
                                        {singlecard.name}
                                    </h2>
                                    <p className="mt-2">{singlecard.title}</p>

                                    <div className="flex gap-2 justify-center mt-3">
                                        <p>
                                            <span>$</span> Price : 15000
                                        </p>

                                        <div>icon</div>

                                        <p>{singlecard.credit}</p>
                                    </div>

                                    <div className="">
                                        <button className="bg-sky-300 w-56 rounded-md p-2 mt-3 mb-3 ">
                                            Select
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-base-100 w-72 ml-5 ">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;
