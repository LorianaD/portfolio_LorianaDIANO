function WorkingWayCard({ icon, title, description }) {
    return(
        <article className="working-way-card">
            <div className="working-way-card-icon-wrapper">
                <img
                    src={icon}
                    alt={title}
                    className="working-way-card-icon"
                />
            </div>

            <h4 className="working-way-card-title">
                {title}
            </h4>

            <p className="working-way-card-description">
                {description}
            </p>
        </article>
    )
}

export default WorkingWayCard