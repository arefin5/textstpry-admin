import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const FeatcherCard = ({ item }) => {
    const [title, settitle] = useState(item.title)

    const [subtitle, setsubtitle] = useState(item.subtitle);
    const [subtitle1, setsubtitle1] = useState(item.subtitle1)
   const [content,setContent]=useState(item.content);
   const [content2,setContent2]=useState(item.content2);

   const [content3,setContent3]=useState(item.content4);

   const [content4,setContent4]=useState(item.content4);

      
    const [uploading, setUploading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
    const api = axiosInterceptor();
  

    const handleUpdate = async (e) => {
        console.log( title,
                content,
                content2,
                content3,
                content4 ,
                subtitle1,
                subtitle,)
        try {
            const data = api.put(`/update-featcher-card/${item._id}`, {
                title,
                content,
                content2,
                content3,
                content4 ,
                subtitle1,
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
                            <label htmlFor="username">Title : </label>
                            <input
                                type="name"
                                onChange={(e) => settitle(e.target.value)}
                                value={title} // Set value directly from item.title1
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">SubTitle : </label>
                            <input
                                type="name"
                                value={subtitle} // Set value directly from item.title1
                                onChange={(e) => setsubtitle(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">SubTitle1 : </label>
                            <input
                                type="name"
                                value={subtitle1} // Set value directly from item.title1
                                onChange={(e) => setsubtitle1(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">Content : </label>
                            <input
                                type="name"
                                value={content} // Set value directly from item.title1
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
{/*  */}
<div>
                            <label htmlFor="username">Content : </label>
                            <input
                                type="name"
                                value={content2} // Set value directly from item.title1
                                onChange={(e) => setContent2(e.target.value)}
                            />
                        </div>
                       
                       {/*  */}
                       <div>
                            <label htmlFor="username">Content : </label>
                            <input
                                type="name"
                                value={content3} // Set value directly from item.title1
                                onChange={(e) => setContent3(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">Content : </label>
                            <input
                                type="name"
                                value={content4} // Set value directly from item.title1
                                onChange={(e) => setContent4(e.target.value)}
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

export default FeatcherCard;
