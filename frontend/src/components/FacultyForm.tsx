import {useState} from 'react';

function FacultyForm() {
    const [name,setName] = useState('');
    const [department,setDepartment] = useState('');

    return(
        <div>

            <h2>Add Faculty </h2>

            <input
            type = "text"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            placeholder = "Enter faculty name"
            />

            <input
            type = "text"
            value = {department}
            onChange = {(e) => setDepartment(e.target.value)}
            placeholder = "Enter department"
            />
        </div>
    );
}

export default FacultyForm;