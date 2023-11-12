import './Docs.css';
import TimelineItem from './TimelineItem.js';

const Timeline = () => {
    const timelineData = [
        { date: 'Date 1', text: 'Event 1' },
        { date: 'Date 2', text: 'Event 2' },
        { date: 'Date 3', text: 'Event 3' },
        // Add more timeline events as needed
    ];

    return (
        <div className="timeline">
            {timelineData.map((item, index) => (
                <TimelineItem key={index} date={item.date} text={item.text} />
            ))}
        </div>
    );
};

export default Timeline;
