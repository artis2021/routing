import React from 'react'
import { Link } from 'react-router-dom'
import {members} from '../assets/data'
import '../styles/FamilyPage.css'
function FamilyPage() {
  return (
    <div className="Family">
        {
            members.map((member, ind) => {
                return (
                    <div className="family_member" key={ind}>
                        <img src={member.photo} alt="member" />
                        <h1>{member.name}</h1>
                        <Link className='link' to={`/family/${member.userId}`}>Know More...</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FamilyPage