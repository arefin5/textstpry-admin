import React, { useEffect, useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import WorkTop from '../component/WorkTop';
import WorkCardSection from '../component/WorkCardSection';

const WorkPage = () => {
    const [work, setWork] = useState([]);
    const [workCard,setWorkCard]=useState([]);
    const api = axiosInterceptor();
    useEffect(() => {
        fetchWork();
        fetchWorkCard();
    }, []);

    const fetchWork = async () => {
        try {
            const response = await api.get("/get-work-top");
            setWork(response.data.work);
            // console.log("data Work", response.data.work);
        } catch (err) {
            console.error(err);
        }
    };

// /get-work-card
const fetchWorkCard = async () => {
    try {
        const response = await api.get("/get-work-card");
        setWorkCard(response.data.workcard);
        console.log("data Work", response.data.workcard);
    } catch (err) {
        console.error(err);
    }
};

    return (
        <div>
        <h1 className="text-center">Change Work Data</h1>
        <div className="text-center">
            {work && (
                <div>
                    {work.map(item => (
                        <div key={item._id}>
                       <WorkTop item={item} />
                        </div>
                    ))}
                </div>
            )}
            {work && (
                <div>
                    {workCard.map(item => (
                        <div key={item._id}>
                       <WorkCardSection item={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
    );
}

export default WorkPage;
