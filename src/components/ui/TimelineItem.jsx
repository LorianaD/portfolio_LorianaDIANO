function TimelineItem({ period, title, school, description }) {
    return (
        <article className="timeline-item">
            
            <div className="timeline-dot" />

            <div className="timeline-card">
                <p className="timeline-period">
                    {period}
                </p>
                <h4 className="timeline-title">
                    {title}
                </h4>
                {school && 
                    <p className="timeline-school">
                        {school}
                    </p>
                }
                <p className="timeline-description">
                    {description}
                </p>
            </div>

        </article>
    );
}

export default TimelineItem;