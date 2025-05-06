import React from 'react';
import axios from "axios";
import styles from './Homepage.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Homepage = () => {
    const [isRegister, setIsRegister] = useState(true);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleRegister = async () => {
        if (formData.password !== formData.confirmPassword) {
            alert(`Password do not match.`);
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            alert("Registration successful! Please log in.");
            toggleForm();
            setFormData({ name: '', email: '', password: '' });

        } catch (error) {
            alert(error.response?.data?.message || "Registration failed")
        }
    };

    const handleLogin = async () => {
        try {
            const respo = await axios.post("http://localhost:5000/api/login", {
                email: formData.email,
                password: formData.password
            });
            const token = respo.data.token;
            localStorage.setItem("authToken", token);

            console.log(`Welcome back!`);

            setFormData({ name: "", email: "", password: "", confirmPassword: "" })
            navigate("/dashboard")
        } catch (error) {
            alert(error.message)
        }
    }

    const toggleForm = () => {
        setIsRegister(prevState => !prevState);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' })
    }
    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.img1}>
                    <img src="/assets/Group.png" alt="homepage_logo" />
                </div>
                <div className={styles.para}>
                    <h1>Welcome aboard my friend</h1>
                    <span>just a couple of clicks and we start</span>
                </div>
            </div>
            <div className={styles.right}>
                {isRegister ? (<div className={styles.first}>
                    <h2 className={styles.heading}>Login</h2>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon1l
                        } />
                        <input name="email" className={styles.emaillogin} value={formData.email} onChange={handleChange} type="email" placeholder="Email" />
                    </div>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon2} />
                        <input name="password" className={styles.password} value={formData.password} onChange={handleChange} type="password" placeholder='Password' />
                    </div>
                    <button className={styles.btn1} onClick={handleLogin}>Log in</button>
                    <p>Have no account yet?</p>
                    <button className={styles.btn2} onClick={toggleForm}>Register</button>
                </div>) : (<div className={styles.first}>
                    <h2 className={styles.heading}>Register</h2>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faUser} className={styles.icon0} />
                        <input name="name" className={styles.name} type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon1r} />
                        <input name="email" className={styles.email} type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon2} />
                        <input name="password" className={styles.password} type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon2} />
                        <input name="confirmPassword" className={styles.password} type=" password" placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} />
                    </div>
                    <button className={styles.btn1} onClick={handleRegister}>Register</button>
                    <p>Have an account?</p>
                    <button className={styles.btn2} onClick={toggleForm}>Login</button>
                </div>)}
            </div>
        </div>
    )
}

export default Homepage;
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from './Homepage.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';

// const Homepage = () => {
//     const [isRegister, setIsRegister] = useState(true);
//     const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//     const [message, setMessage] = useState("");

//     const toggleForm = () => setIsRegister(prevState => !prevState);

//     // Handle input changes
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = isRegister ? '/api/users/register' : '/api/users/login';
//             const response = await axios.post(url, formData);
//             setMessage(`Success: ${ response.data.name || 'Logged in successfully' } `);
//         } catch (error) {
//             setMessage(`Error: ${ error.response?.data?.message || 'An error occurred' } `);
//         }
//     };

//     return (
//         <div className={styles.page}>
//             <div className={styles.left}>
//                 <div className={styles.img1}>
//                     <img src="/assets/Group.png" alt="homepage_logo" />
//                 </div>
//                 <div className={styles.para}>
//                     <h1>Welcome aboard my friend</h1>
//                     <span>Just a couple of clicks and we start</span>
//                 </div>
//             </div>
//             <div className={styles.right}>
//                 <form onSubmit={handleSubmit}>
//                     {isRegister ? (
//                         <>
//                             <h2 className={styles.heading}>Register</h2>
//                             <div className={styles.container}>
//                                 <FontAwesomeIcon icon={faUser} className={styles.icon0} />
//                                 <input
//                                     className={styles.name}
//                                     type="text"
//                                     name="name"
//                                     placeholder="Name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </>
//                     ) : null}
//                     <div className={styles.container}>
//                         <FontAwesomeIcon icon={faEnvelope} className={styles.icon1r} />
//                         <input
//                             className={styles.email}
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className={styles.container}>
//                         <FontAwesomeIcon icon={faLock} className={styles.icon2} />
//                         <input
//                             className={styles.password}
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <button className={styles.btn1} type="submit">
//                         {isRegister ? "Register" : "Log in"}
//                     </button>
//                 </form>
//                 <p>{isRegister ? "Have an account?" : "Have no account yet?"}</p>
//                 <button className={styles.btn2} onClick={toggleForm}>
//                     {isRegister ? "Login" : "Register"}
//                 </button>
//                 {message && <p>{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default Homepage;
