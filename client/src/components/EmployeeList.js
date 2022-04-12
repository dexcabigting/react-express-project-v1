import React, {useEffect, useState} from 'react'

function EmployeeList() {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch('/api').then(
            response => response.json()
        ).then(
            data => {
            setBackendData(data)
            }
        )
    }, []);

    return (
        <div>
          {
            (typeof backendData.employees === 'undefined') ? (
              <p>Fetching...</p>
            ) : (
              backendData.employees.map((employee, key) => (
                <p key={key}>{employee}</p>
              ))
            )
          }
        </div>
    )
}

export default EmployeeList
