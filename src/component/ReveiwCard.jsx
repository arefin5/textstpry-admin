import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const ReveiwCard = ({ item }) => {
    const [title, settitle] = useState(item.title)

    const [subtitle, setsubtitle] = useState(item.subtitle)
    const [reting, setrating] = useState(item.reting)
    const [image, setimage] = useState(item.image)
    const [name, setName] = useState(item.name);


    const [uploading, setUploading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
    const api = axiosInterceptor();
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        // console.log(formData)
        try {
            const response = await api.post("/upload-image-file", formData);
            if (response && response.data && response.data) {
                console.log(response.data)
                setimage({
                    url: response.data.url,
                    public_id: response.data.public_id,
                });
                setUploading(false);
                setSuccessMessage('Image uploaded successfully.');
            } else {
                setErrorMessage("Failed to upload image. Please try again.");
            }
        } catch (err) {
            console.error('Error uploading image:', err);
            setErrorMessage("Failed to upload image. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    const handleUpdate = async (e) => {
        console.log(image)
        try {
            const data = api.put(`/update-reveiw-card/${item._id}`, {
                title,
                name,
                image,
                subtitle,
                reting
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
                            <label htmlFor="username"> Name </label>
                            <input
                                type="email"
                                value={name} // Set value directly from item.title1
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username"> Rating : </label>
                            <input
                                type="number"
                                value={reting} // Set value directly from item.title1
                                onChange={(e) => setrating(e.target.value)}
                            />
                        </div>
                        {/*  */}


                        <div className="mb-3">

                            <label className="form-label">
                                {/*  */}
                                {image ? (
                                    <Avatar size={100} src={image.url} className="mt-1" />
                                ) : uploading ? (
                                    <LoadingOutlined className="mt-2" />
                                ) : (
                                    <CameraOutlined className="mt-2" />
                                )}
                                Image
                            </label>
                            <input
                                type="file"
                                onChange={handleImageChange}
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

export default ReveiwCard;
