import React from 'react';
import './team.css';

const Team = () => {
    const teamMembers = [
        { name: 'Alice Johnson', role: 'Project Manager', image: 'https://via.placeholder.com/200x200' },
        { name: 'Bob Smith', role: 'Lead Developer', image: 'https://via.placeholder.com/200x200' },
        { name: 'Charlie Brown', role: 'UI/UX Designer', image: 'https://via.placeholder.com/200x200' },
    ];

    return (
        <section className="team">
            <h2 className="team_header">Meet Our Team</h2>
            <h2 className="team_subheader">We are a team of professionals</h2>
            <div className="team_members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team_member">
                        <img className="team_member_image" src={member.image} alt={member.name} />
                        <h3 className="team_member_name">{member.name}</h3>
                        <p className="team_member_role">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;