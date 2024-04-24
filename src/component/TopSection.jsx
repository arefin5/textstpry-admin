import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const TopSection = ({ item }) => {
    const [title1, settitle1] = useState(item.title1)
    const [title2, settitle2] = useState(item.title2)
    const [title3, settitle3] = useState(item.title3)
    const [title4, settitle4] = useState(item.title4)
    const [title6, settitle6] = useState(item.title6)
    const [title5, settitle5] = useState(item.title5)
    const [title7, settitle7] = useState(item.title7)
    const [title8, settitle8] = useState(item.title8);
    const [sltitle, setsltitle] = useState(item.sltitle)
    const [subtitle1, setsubtitle1] = useState(item.subtitle1)
    const [subtitle2, setsubtitle2] = useState(item.subtitle2)
    const [cardtitle, setcardtitle] = useState(item.cardtitle);
    const [firstButton, setfirstButton] = useState(item.firstButton);
    const [image, setimage] = useState(item.image)
    const [secendButton, setsecendButton] = useState(item.secendButton)
    const [reveiwtitle, setreveiwtitle] = useState(item.reveiwtitle)
    const [uploading, setUploading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
    const api = axiosInterceptor();

    const isImageDefined = image !== undefined;
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
        // console.log(image)
        try {
            const data = api.put(`update-top/${item._id}`, {
                title1,
                title2,
                title3,
                title4,
                title5,
                title6,
                title7,
                title8,
                subtitle1,
                subtitle2,
                sltitle,
                firstButton,
                secendButton,
                image,
                cardtitle,
                reveiwtitle
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
                            <label htmlFor="username"> Sub Title1  : </label>
                            <input
                                type="email"
                                value={subtitle1} // Set value directly from item.title1
                                onChange={(e) => setsubtitle1(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">Sub Title 2 : </label>
                            <input
                                type="email"
                                value={subtitle2} // Set value directly from item.title1
                                onChange={(e) => setsubtitle2(e.target.value)}
                            />
                        </div>
                        {/*  */}

                        <div>
                            <label htmlFor="username">cardtitle : </label>
                            <input
                                type="name"
                                value={cardtitle} // Set value directly from item.title1
                                onChange={(e) => setcardtitle(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">reveiwtitle  : </label>
                            <input
                                type="name"
                                value={reveiwtitle} // Set value directly from item.title1
                                onChange={(e) => setreveiwtitle(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username"> sltitle : </label>
                            <input
                                type="name"
                                value={sltitle} // Set value directly from item.title1
                                onChange={(e) => setsltitle(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">firstButton  : </label>
                            <input
                                type="name"
                                value={firstButton} // Set value directly from item.title1
                                onChange={(e) => setfirstButton(e.target.value)}
                            />
                        </div>
                        {/*  */}
                        <div>
                            <label htmlFor="username">secendButton  : </label>
                            <input
                                type="name"
                                value={secendButton} // Set value directly from item.title1
                                onChange={(e) => setsecendButton(e.target.value)}
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

export default TopSection;
