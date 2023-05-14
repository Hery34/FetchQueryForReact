import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisplayFetchQuery({ Theader, Tbody, Tclass }) {
    // Render a table with the specified header, body, and class
    return (
        <table className={`table ${Tclass}`}>
            <thead>
                <tr>
                    {Theader.map((header) => (
                        <th scope="col" key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Tbody.map((row) => (
                    // Render a row for each item in the body
                    <tr key={row.id} >
                        {Object.values(row).map((cell) => (
                            // Render a cell for each value in the row
                            <td scope="col" key={cell}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}