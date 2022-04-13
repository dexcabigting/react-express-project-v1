import React, { useEffect, useState } from 'react'

function EmployeeList() {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(data => { setBackendData(data) })
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Sick Leave Credits</th>
                    <th>Vacation Leave Credits</th>
                    <th>Hourly Rate</th>
                </tr>

                {
                    (typeof backendData.employees === 'undefined') ? (
                        <p>Fetching...</p>
                    ) : (
                        backendData.employees.map((employee, key) => (
                            <tr>
                                <td>{employee['firstName']}</td>
                                <td>{employee['lastName']}</td>
                                <td>{employee['position']}</td>
                                <td>{employee['sickLeaveCredits']}</td>
                                <td>{employee['vacationLeaveCredits']}</td>
                                <td>{employee['hourlyRate']}</td>
                            </tr>
                        ))
                    )
                }
            </table>
        </div>
    )
}

export default EmployeeList
