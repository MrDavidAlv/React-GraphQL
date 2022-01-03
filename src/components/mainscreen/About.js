import React from 'react'

const About = () => {
    return (
        <div className='mycontainer'>
            <h2 className='title-components'>About me</h2>
            <h3 className='parrafo'>Me</h3>
            <p className='parrafo'>
                I am currently an engineering student presenting my thesis to obtain the degree of automation engineer. I have knowledge in different areas of technology related to industry 4.0 topics such as mobile and industrial robotics, 3D modeling for engineering, electronics, mechanism design, hardware programming (c ++, python and Ladder) and web development (html , css, javascript, react, python with Django and java). Passionate and enthusiastic about undertaking autonomous robotics and software development projects and developments. I also have the ability to work in a team and excellent interpersonal relationships, adaptability and continuous learning to hone my skills.
            </p> <br />

            <div>
                <h3 className='parrafo'>Experience</h3>
                <p className='parrafo'>
                    I have five months of experience as a software development analyst 1 where I mainly work as a frontend developer with the react js framework, also API development with Python and Golang, help to develop some improvement modules to the central application of the company in Java.
                </p>
            </div><br /><br />

            <div>
                <h3 className='parrafo'>Projects</h3>
                <div>
                    <h4 className='parrafo' ><li>Axioma.io</li></h4>
                    <div className='title-components'>
                        <img src="https://gds-storage-prd.s3.amazonaws.com/unified-gallery/200309/1782/076feb1c/thumbnails/r1-3500-3500.jpg" width="350px" />
                    </div> 
                    <p className='parrafo'>
                        Development of a multipurpose autonomous mobility robotic platform for spraying and seeding tasks in agricultural fields, planetary exploration, customer service or package deliveries. The robot is equipped with different hardware devices such as actuators (motors, servos, lights, ...), sensors (Lidar, camera, ...), microprocessor (raspberry pi) and microcontroller (arduino). For the operation of control systems and planning of robotic trajectories, it has installed a ROS2 operating meta-system (robotic operating system v2) that runs on an Ubuntu Linux operating system for ARM architectures.
                    </p>
                </div><br />
                <div>
                    <h4 className='parrafo' ><li>Egg incubator</li></h4>
                    <div className='title-components'>
                        <img src="https://www.utadeo.edu.co/sites/tadeo/files/node/wysiwyg/entregas.finales.ingenieria.utadeo.6.png" width="350px" />
                    </div>
                    <p className='parrafo'>
                        Construction of an automated egg incubator for the poultry industry process.
                    </p>
                </div><br />
                <div>
                    <h4 className='parrafo' ><li>Tattotronix</li></h4>
                    <div className='title-components'>
                        <img src="https://gds-storage-prd.s3.amazonaws.com/unified-gallery/200311/2733/4790a6fb/thumbnails/robot1-3500-3500.jpg" width="350px" />
                    </div>
                    <p className='parrafo'>
                        Design and simulation of a robotic arm robot designed to perform tattoos with conductive flexible substrates.
                    </p>
                </div><br />
                <div>
                    <h4 className='parrafo' ><li>Mechatronics projects</li></h4>
                    <div className='title-components'>
                        <img src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/73458854_512540366264930_3737870678628499456_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE5PhjVL5nBTW1nptuPrg3B1UgtKrsTyjnVSC0quxPKOatjb2wVYSSLNYHStudjMhnK4tw3A25qk0RzRo6Jy2Yr&_nc_ohc=auPMPjnkXqYAX-jq0jY&_nc_ht=scontent-bog1-1.xx&oh=00_AT_om5THFa70ry3qa0qcycZXzrAne762iyFF3cuqWxrI2g&oe=61F6472F" width="350px" />
                    </div>
                    <p className='parrafo'>
                        Construction of different mechatronic projects such as sumo fighting robots, sprinter line follower robots, greenhouses; domotic houses, ... Photographic evidence of some projects on my instagram.
                    </p>
                </div><br />
                <div>
                    <h4 className='parrafo' ><li>Web projects</li></h4>
                    <p className='parrafo'>
                        Development of some static websites with css, javascript and html, dynamic sites with react and APIs with Python (Django) and Golang.
                    </p>
                </div>
            </div><br /><br />




            <div>
                <h3 className='parrafo'> My CV </h3>
                <iframe src="https://mrdavidalv.github.io/MrDavidAlv/" width="100%" height="900px" allow="fullscreen" />
            </div>

        </div>
    )
}

export default About
