import React from 'react';
import coverPhoto from '../../assets/cover/profilepic.jpg';

function About() {
    return (
        <section>
            <h2 id="about" className="flex-row">About Me</h2>
            <div className="flex-row">
                <img src={coverPhoto} alt="cover" />
            </div>
            <div className="flex-row">
                <p>An El Paso based web developer with
                    knowledge in both front and back end technologies.
                </p>
            </div>
        </section>
    );
}

export default About;