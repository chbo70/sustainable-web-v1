import React from 'react';
import './team.css';

const Team = () => {
    // Add descriptive comments
    // Array of team members, each object contains name, role, and
    // image URL of the team member
    const teamMembers = [
        { name: 'Milena Hilti', role: 'Project Manager', image: 'https://placehold.co/200x200.jpeg' },
        { name: 'Bob Smith', role: 'Lead Developer', image: 'https://placehold.co/200x200.jpeg' },
        { name: 'Paul Reiner', role: 'UI/UX Designer', image: 'https://placehold.co/200x200.jpeg' },
        { name: 'Diana Johnson', role: 'Software Engineer', image: 'https://placehold.co/200x200.jpeg' },
        { name: 'Amin Jaoui', role: 'Frontend Developer', image: 'https://placehold.co/200x200.jpeg' },
        { name: 'Franklin Brown', role: 'Backend Developer', image: 'https://placehold.co/200x200.jpeg' },
        { name: 'Grace Davis', role: 'Quality Assurance', image: 'https://placehold.co/200x200.png' },
        { name: 'Henry Wilson', role: 'Technical Support', image: 'https://placehold.co/200x200.png' },
    ];

    // Return the JSX for the Team component
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