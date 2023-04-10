import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const datas = useLoaderData();
    const {jobId} = useParams();

    console.log(jobId)

    const newDetail = datas.find(detail => detail.id === jobId);

    console.log(newDetail);

    return (
        <div>
            <p>{newDetail.description}</p>
        </div>
    );
};

export default ViewDetails;