
export default function FetchQuery({ url, fields, setData }) {
    // Declare state variables for error and loading
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Use the useEffect hook to fetch data from the API
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('This API is not responding');
                }
                return response.json();
            })
            .then((actualData) => {
                // Filter the data based on the specified fields
                const filteredData = actualData.map((item) => {
                    const filteredItem = {};
                    fields.forEach((field) => {
                        filteredItem[field] = item[field];
                    });
                    return filteredItem;
                });
                // Update the state with the filtered data
                setData(filteredData);
            })
            .catch((err) => {
                // Log any errors to the console
                console.log(err.message);
            })
            .finally(() => {
                // Set loading to false when the fetch is complete
                setLoading(false);
            });
    }, [url, fields]);

    // Render the component with loading and error messages
    return (
        <div>
            {loading && <div> Data's uploading, please wait...</div>}
            {error && <p>{error}</p>}
        </div>
    );
}

