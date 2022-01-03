import './ProjectCard.scss'
import arcadeSrc from '../resources/arcade.png'

const ProjectCard = (props) => {
    let description = '';

    return (
        <div className={`project-card ${props.alternate && 'alternate'}`}>
            <div className='project-card-thumbnail'>
                <img src={arcadeSrc} alt="" srcset="" />
            </div>
            <div className='project-card-text'>
                <img src={arcadeSrc} alt="" srcset="" />
                <small className="primary-blue p-small bold">Client project</small>
                <h2>ARcade Sports</h2>
                <p className='p-small'>Designed the website as well as seperate sections the client requested.<br />Created and implemented wordpress theme and components.</p>
                <small><strong>Role:</strong> Developer, Designer</small>
                <ul className="project-tech primary-blue p-small">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Wordpress</li>
                    <li>PHP</li>
                </ul>
                <small>arcadesports.io</small>
            </div>
        </div>
    )
}

export default ProjectCard;