import React, { useEffect, useState } from 'react';

import axiosInterceptor from '../axios/axiosInterceptor';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import TopSection from '../component/TopSection';

const Account = () => {

    const [toph, setToph] = useState([]);
    const api = axiosInterceptor();
    useEffect(() => {
        fetchTopCard();
    }, []);

    const fetchTopCard = async () => {
        try {
            const response = await api.get("/get-top");
            setToph(response.data.top);
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
                           <TopSection item={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Account;
