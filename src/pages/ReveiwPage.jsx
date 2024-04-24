import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import ProductivityCard from '../component/ProductivityCard';
import ReveiwTop from '../component/ReveiwTop';
import ReveiwCard from '../component/ReveiwCard';

const ReveiwPage = () => {

    const [toph, setToph] = useState([]);
    const [reveiwcard, setReveiwCard] = useState([])
    const api = axiosInterceptor();
    useEffect(() => {
        fetchTopCard();
        fetchReveiwCard();
    }, []);

    const fetchTopCard = async () => {
        try {
            const response = await api.get("/get-reveiw-top");
            setToph(response.data.reveiw);
            // console.log("data users", response.data.top);
        } catch (err) {
            console.error(err);
        }
    };
    const fetchReveiwCard = async () => {
        try {
            const response = await api.get("/get-reveiw-card");
            setReveiwCard(response.data.reveiwcard);
            // console.log("data users", response.data.top);
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div>
            <h1 className="text-center">Change Top Data</h1>
            <div className="text-center">
                {toph && (
                    <div>
                        {toph.map(item => (
                            <div key={item._id}>
                                <ReveiwTop item={item} />
                            </div>
                        ))}
                    </div>
                )}
                <h1>Reveiw Section Data </h1>
                {reveiwcard && (
                    <div>
                        {reveiwcard.map(item => (
                            <div key={item._id}>
                                <ReveiwCard item={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ReveiwPage;
