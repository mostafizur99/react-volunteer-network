import React from 'react';
import { useForm } from "react-hook-form";


const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = event => {
        console.log(event)
        fetch('https://nameless-caverns-69599.herokuapp.com/volunteers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully registered as a volunteer.')
                    reset();
                }
            })
    };


    return (
        <div>
            <h2>Register as a Volunteer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("name", { required: true })} placeholder="Event title" />
                {errors.name && <span>This field is required</span>}

                <textarea {...register("description", { required: true })} placeholder="Description" />
                {errors.description && <span>This field is required</span>}

                <input {...register("imgThumb", { required: true })} placeholder="Image" />
                {errors.imgThumb && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;