import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [donations, setDonations] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/donations')
        .then( res => res.json())
        .then( data => setDonations(data))
    } , [])


    return (
        <div>
            <div> <h1 className="text-3xl font-bold underline">All Donations Here</h1></div>
            {
                donations.map(donat => <li className="list-decimal" key={donat.id}> <Link to={`/donation/${donat.id}`}> {donat.title} </Link> </li>)
            }
        </div>
    );
};

export default Home;