import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const WorkTop = ({ item }) => {
    const [title, settitle] = useState(item.title)
    const [subtitle, setsltitle] = useState(item.subtitle)
    const [subtitle1, setsubtitle1] = useState(item.subtitle1)
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
    const api = axiosInterceptor();
    const handleUpdate = async (e) => {
        try {
            const data = api.put(`/update-work-top/${item._id}`, {
                title,
                subtitle,
                subtitle1,
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
                                value={title} // Set value directly from item.title1
                                onChange={(e) => settitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="username">Sub Title  : </label>
                            <input
                                type="name"
                                onChange={(e) => setsubtitle1(e.target.value)}
                                value={subtitle1} // Set value directly from item.title1
                            />
                        </div>
                        <div>
                            <label htmlFor="username">Sub Titile </label>
                            <input
                                type="name"
                                onChange={(e) => setsltitle(e.target.value)}
                                value={subtitle} // Set value directly from item.title1
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

export default WorkTop;
