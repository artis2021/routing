import React from 'react'
import { Link, useParams } from 'react-router-dom'
import getMemberById from '../assets/data';
import '../styles/ProfilePage.css'
function ProfilePage() {
    const params = useParams();
    const name = params.name

    const member = getMemberById(name);
    console.log(member)

    if(!member) return <div>No Such Member exist!</div>

    return (
        <div className='ProfilePage'>
            <Link to="/" className="link">Home</Link>
            <div className='Profile'>
                <img src={member.photo} alt="member" />
                <div className='info'>
                    <h2>Name: {member.name}</h2>
                    <h2>Nick Name: {member.nickname}</h2>
                    <h2>Age: {member.age}</h2>
                    <h2>Weight: {member.weight}</h2>
                    <h2>Height: {member.height}</h2>
                </div>
            </div>
            
        </div>
    )
}

export default ProfilePage