import TimelineItem from "./TimelineItem";

function Timeline({ items }) {
    return (
        <div className="timeline">

            {items.map((item) => (
                <TimelineItem
                    key={item.id}
                    period={item.period}
                    title={item.title}
                    school={item.school}
                    description={item.description}
                />
            ))}
            
        </div>
    );
}

export default Timeline;