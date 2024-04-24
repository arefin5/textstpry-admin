import React, { useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const WorkCardSection = ({ item }) => {
    const [title, settitle] = useState(item.title)
    const [subtitle, setsltitle] = useState(item.subtitle)
    const [subtitle1, setsubtitle1] = useState(item.subtitle1)
    const [subtitle2, setsubtitle2] = useState(item.subtitle2)
    const [image, setimage] = useState(item.image)

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
    const api = axiosInterceptor();
    const [uploading, setUploading] = useState(false);
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        // console.log(formData)
        try {
            const response = await api.post("/upload-image-file", formData);
            if (response && response.data && response.data) {
                // console.log(response.data)
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
        try {
            const data = api.put(`/update-work-card/${item._id}`, {
                title,
                subtitle,
                subtitle1,
                subtitle2,
                image
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
                        {/*  */}
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
                            <label htmlFor="username">Sub Titile 1: </label>
                            <input
                                type="name"
                                onChange={(e) => setsltitle(e.target.value)}
                                value={subtitle} // Set value directly from item.title1
                            />
                        </div>


                        <div>
                            <label htmlFor="username">Sub Titile 2: </label>
                            <input
                                type="name"
                                onChange={(e) => setsubtitle2(e.target.value)}
                                value={subtitle2} // Set value directly from item.title1
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

export default WorkCardSection;
