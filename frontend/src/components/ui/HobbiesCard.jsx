function HobbiesCard({ icon, title, description }) {
    return(
        <article className="hobby-card">
            <div className="hobby-card-icon-wrapper">
                <img
                    src={icon}
                    alt={title}
                    className="hobby-card-icon"
                />
            </div>
            <div className="hobby-card-text-wrapper">
                <h4 className="hobby-card-title">
                    {title}
                </h4>

                <p className="hobby-card-description">
                    {description}
                </p>
            </div>
            
        </article>
    )
}

export default HobbiesCard