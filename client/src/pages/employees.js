import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

const employeeListContainer = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center'
}

const tableStyles = {
    borderCollapse: 'collapse',
}

const tableRowStyles = {
    borderBottom: '1px solid brown'
}

const tableDataStyles = {
    textAlign: 'center',
    padding: '1em 0.5em',
    fontSize: '0.9em'
}

const buttonContainerStyles = {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center'
}

const updateButtonStyles = {
    textDecoration: 'none',
    color: 'brown',
    padding: '0.5em',
    margin: '0.5em 0 0.25em',
    borderBottom: '1px solid brown',
    fontSize: '0.9em'
}

const deleteButtonStyles = {
    textDecoration: 'none',
    color: 'red',
    padding: '0.5em',
    margin: '0 0 0.5em',
    fontSize: '0.9em'
}

function Employees() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(data => { setBackendData(data) })
    }, [])

    return (
        <Layout pageTitle='Employees'>
            <div style={employeeListContainer}>
                <table style={tableStyles}>
                    <tr style={tableRowStyles}>
                        <th style={tableDataStyles}>First Name</th>
                        <th style={tableDataStyles}>Last Name</th>
                        <th style={tableDataStyles}>Position</th>
                        <th style={tableDataStyles}>Sick Leave Credits</th>
                        <th style={tableDataStyles}>Vacation Leave Credits</th>
                        <th style={tableDataStyles}>Hourly Rate</th>
                        <th style={tableDataStyles}>Actions</th>
                    </tr>

                    <tbody>
                        {
                            (typeof backendData.employees === 'undefined')
                                ? <p>Fetching...</p>
                                : (
                                    backendData.employees.map((employee, key) => (
                                        <tr style={tableRowStyles}>
                                            <td key={key} style={tableDataStyles}>{employee['firstName']}</td>
                                            <td key={key} style={tableDataStyles}>{employee['lastName']}</td>
                                            <td key={key} style={tableDataStyles}>{employee['position']}</td>
                                            <td key={key} style={tableDataStyles}>{employee['sickLeaveCredits']}</td>
                                            <td key={key} style={tableDataStyles}>{employee['vacationLeaveCredits']}</td>
                                            <td key={key} style={tableDataStyles}>{employee['hourlyRate']}</td>
                                            <td key={key} style={buttonContainerStyles}>
                                                <a href="#" style={updateButtonStyles}>Update</a>
                                                <a href="#" style={deleteButtonStyles}>Delete</a>
                                            </td>
                                        </tr>
                                    ))
                                )
                        }
                    </tbody>
                </table>
            </div >
        </Layout>
    )
}

export default Employees
