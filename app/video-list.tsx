import videos from './lesson-videos.json';

export default function VideoList({category}:{category:string}) {
  const items = category === '5:1271' ? videos.slice(0,4) : category === '5:1280' ? videos.slice(4,8) : category === '5:1296' ? videos.slice(8,12) : category === '5:1301' ? videos.slice(12,16) : [];
  return <div className="lesson-video-list" data-node-id="5:1317">
    {items.length === 0 && <p className="lesson-video-empty">Adult lesson videos coming soon.</p>}
    {items.map(video => {
      const href = `https://www.youtube.com/watch?v=${video.id}`;
      return <article className="lesson-video-card" key={video.id}>
        <a className="lesson-video-thumbnail" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${video.englishTitle}`}>
          <img loading="lazy" decoding="async" src={video.thumbnail} alt={video.englishTitle} />
        </a>
        <div className="lesson-video-details">
          <div className="lesson-video-heading">
            <div className="lesson-video-meta"><span>Free Sample Lesson</span><span className="lesson-video-duration"><img loading="lazy" decoding="async" src="/musium-media-v2/5-1265-f1f6a.svg" alt="" />{video.duration}</span></div>
            <h3>{video.englishTitle}</h3>
          </div>
          <div className="lesson-video-bottom">
            <div className="lesson-video-avatars">
              {video.avatars.map((avatar,i) => <img loading="lazy" decoding="async" src={avatar.url} alt={avatar.name} title={avatar.name} key={`${video.id}-${i}`} />)}
              <a className="lesson-comment-link" href={href} target="_blank" rel="noopener noreferrer" aria-label="View comments on YouTube">+</a>
            </div>
            <a className="lesson-video-watch" href={href} target="_blank" rel="noopener noreferrer">Watch on YouTube →</a>
          </div>
        </div>
      </article>;
    })}
  </div>;
}
