import {useState} from "react";
const Projects = () => {

    const [projects] = useState([
        {
            name: 'travel-diary',
            site: 'https://afternoon-harbor-62644.herokuapp.com/',
            github: 'https://github.com/strudelAndCoffee/travel-log-dashboard.git'
        }

    ])
    return (
        <div id='projects' className='row'>
            {projects.map((image, index) => (
                <div  className='project col-4'>
                   
                    <div>
                        <img
                            className='project_img'
                            src= {require(`../../assets/images/travel-diary-image.png`)}
                            alt={image}
                            
                        />
                        <div className='project-info border project-content'>
                            <div className='row project-details'>
                            <div className='col-10'>
                                    <p className='project-name'>Travel Diary</p>
                                </div>
                                <div className='col-10'>
                                    <a className='project-links' href='
afternoon-harbor-62644.herokuapp.com'>Deployed App: </a>
                                </div>
                                <div className='col-10' >
                                    <a className='project-links'  href='https://github.com/strudelAndCoffee/travel-log-dashboard'>GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects