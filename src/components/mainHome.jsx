import '../styles/mainHome.css';

export default function homeCard({cover, title}) {
    return (
        <div className='mainHome-section'>
                <div className='mainHome-card'>
                    <img src={cover} alt={title} className='mainHome-Image'/>
                    <h1 className='mainHome-title'>{title}</h1>
                </div>
        </div>
    )
}