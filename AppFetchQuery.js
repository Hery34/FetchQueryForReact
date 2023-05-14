import { useEffect, useState } from 'react';
import FetchQuery from '/FetchQuery';
import DisplayFetchQuery from 'DisplayFetchQuery';

function AppFetchQuery() {
    // Declare state variables for the table header, body, and class
    const [Theader, setTheader] = useState(["Id", "username"]);
    const [Tbody, setTbody] = useState([]);
    const Tclass = 'UsersTable';

    // Set the URL and fields to fetch from the API
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fields = ['id', 'username'];

    // Render the component with the FetchQuery and DisplayFetchQuery components
    return (
        <div className="App">
            <FetchQuery url={url} fields={fields} setData={setTbody} />
            <DisplayFetchQuery Theader={Theader} Tbody={Tbody} Tclass={Tclass} />
        </div>
    );
}

