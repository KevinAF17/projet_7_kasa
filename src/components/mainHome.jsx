import '../styles/mainHome.css';

export default function homeCard({cover, title, id}) {
    return (
        <div className='mainHome-section'>
                <div className='mainHome-card-1'>
                    <img src={cover} alt={title} className='mainHome-Image'/>
                    <h1 className='mainHome-title'>{title}</h1>
                </div>
                <div className='mainHome-card-2'>
                    <img src={cover} alt={title} className='mainHome-Image'/>
                    <h1 className='mainHome-title'>{title}</h1>
                </div>
                <div className='mainHome-card-3'>
                    <img src={cover} alt={title} className='mainHome-Image'/>
                    <h1 className='mainHome-title'>{title}</h1>
                </div>
                <div className='mainHome-card-4'>
                    <img src={cover} alt={title} className='mainHome-Image'/>
                    <h1 className='mainHome-title'>{title}</h1>
                </div>
                <div className='mainHome-card-5'>
                    <img src={cover} alt={title} className='mainHome-Image'/>
                    <h1 className='mainHome-title'>{title}</h1>
                </div>
                <div className='mainHome-card-6'>
                    <img src={cover} alt={title} className='mainHome-Image'/>
                    <h1 className='mainHome-title'>{title}</h1>
                </div>
        </div>
    )
}