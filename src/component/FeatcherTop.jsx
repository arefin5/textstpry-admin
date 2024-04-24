import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const FeatcherTop = ({ item }) => {
    const [title, settitle] = useState(item.title)
    const [subtitle, setsubtitle] = useState(item.subtitle)
    
    const api = axiosInterceptor();
    const handleUpdate = async (e) => {
        try {
            const data = api.put(`/update-featcher-top/${item._id}`, {
                title,
                subtitle,
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
                                onChange={(e) => setsubtitle(e.target.value)}
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



export default FeatcherTop;
