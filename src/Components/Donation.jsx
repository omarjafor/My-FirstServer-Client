import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Donation = () => {


    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/donations')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    // const donations = useLoaderData();
    const { id } = useParams();
    console.log(id);

    const donation = donations?.find(donat => donat?.id === parseInt(id));
    console.log(donation);

    return (
        <div>
            <h4 className="text-2xl font-bold"> {donation?.id} </h4>
            <h1 className="text-4xl font-bold mb-4"> {donation?.title} </h1>
            <img className="rounded-xl" src={donation?.picture} alt="" />
        </div>
    );
};

export default Donation;