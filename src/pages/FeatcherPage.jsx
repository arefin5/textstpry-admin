import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import ProductivityCard from '../component/ProductivityCard';
import FeatcherCard from '../component/FeatcherCard';
import ReveiwCard from '../component/ReveiwCard';
import FeatcherTop from "../component/FeatcherTop"
const FeatcherPage = () => {

    const [toph, setToph] = useState([]);
    const [reveiwcard, setReveiwCard] = useState([])
    const api = axiosInterceptor();
    useEffect(() => {
        fetchTopCard();
        fetchReveiwCard();
    }, []);

    const fetchTopCard = async () => {
        try {
            const response = await api.get("/get-featcher-top");
            setToph(response.data.featcher);
            // console.log("data users", response.data.top);
        } catch (err) {
            console.error(err);
        }
    };
    const fetchReveiwCard = async () => {
        try {
            const response = await api.get("/get-featcher-card");
            setReveiwCard(response.data.workcard);
            console.log("data users", response.data.workcard);
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div>
            <h1 className="text-center">Change Featcher Top </h1>
            <div className="text-center">
                {toph && (
                    <div>
                        {toph.map(item => (
                            <div key={item._id}>
                                <FeatcherTop item={item} />
                            </div>
                        ))}
                    </div>
                )}
                <h1>Reveiw Section Data </h1>
                {reveiwcard && (
                    <div>
                        {reveiwcard.map(item => (
                            <div key={item._id}>
                                <FeatcherCard item={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}


export default FeatcherPage;
