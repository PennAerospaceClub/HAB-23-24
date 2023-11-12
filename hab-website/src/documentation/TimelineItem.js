import './Docs.css';
const TimelineItem = ({ date, text }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-date">{date}</div>
            <div className="timeline-text">{text}</div>
        </div>
    );
};

export default TimelineItem;