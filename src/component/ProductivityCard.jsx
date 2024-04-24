import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const ProductivityCard = ({ item }) => {
    const [title1, settitle1] = useState(item.title1)
    const [title2, settitle2] = useState(item.title2)
    const [title3, settitle3] = useState(item.title3)
    const [title4, settitle4] = useState(item.title4)
    const [title6, settitle6] = useState(item.title6)
    const [title5, settitle5] = useState(item.title5)
    const [title7, settitle7] = useState(item.title7)
    const [title8, settitle8] = useState(item.title8);
    
    const [firstButton, setfirstButton] = useState(item.firstButton);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
    const api = axiosInterceptor();



    const handleUpdate = async (e) => {
        // console.log(image)
        try {
            const data = api.put(`/update-productivity/${item._id}`, {
                title1,
                title2,
                title3,
                title4,
                title5,
                title6,
                title7,
                title8,
               
                firstButton,
               
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="text-center">

                <div>
                    < >
                        <div>
                            <label htmlFor="username">Title1 : </label>
                            <input
                                type="name"
                                value={title1} // Set value directly from item.title1
                                onChange={(e) => settitle1(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="username">Title2 : </label>
                            <input
                                type="name"
                                onChange={(e) => settitle2(e.target.value)}
                                value={title2} // Set value directly from item.title1
                            />
                        </div>
                        <div>
                            <label htmlFor="username">Title3 : </label>
                            <input
                                type="name"
                                onChange={(e) => settitle3(e.target.value)}
                                value={title3} // Set value directly from item.title1
                            />
                        </div>
                        <div>
                            <label htmlFor="username">Title : </label>
                            <input
                                type="email"
                                onChange={(e) => settitle4(e.target.value)}
                                value={title4} // Set value directly from item.title1
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">Title5 : </label>
                            <input
                                type="email"
                                value={title5} // Set value directly from item.title1
                                onChange={(e) => settitle5(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">Title6 : </label>
                            <input
                                type="email"
                                value={title6} // Set value directly from item.title1
                                onChange={(e) => settitle6(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">Title7 : </label>
                            <input
                                type="email"
                                value={title7} // Set value directly from item.title1
                                onChange={(e) => settitle7(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">Title 8 : </label>
                            <input
                                type="email"
                                value={title8} // Set value directly from item.title1
                                onChange={(e) => settitle8(e.target.value)}
                            />
                        </div>
                       
                        <div>
                            <label htmlFor="username">firstButton  : </label>
                            <input
                                type="name"
                                value={firstButton} // Set value directly from item.title1
                                onChange={(e) => setfirstButton(e.target.value)}
                            />
                        </div>
                    </>
                    <button
                            type="button"
                            className="btn bg-success btn-sm text-white"
                            onClick={handleUpdate}
                        >
                            Submit
                        </button>
                </div>

            </div>
        </div>
    );
}

export default ProductivityCard;
