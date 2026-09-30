"use client";
import {useRef,useState} from "react";
const imgImage1696 = "/musium-media-v2/testimonial-preview-original.png";
const imgHugeIconMultimediaAndAudioOutlinePlay = "/musium-media-v2/5-1430-b14bd.svg";

export default function Video() {
  const player = useRef<HTMLVideoElement>(null);
  const [playing,setPlaying] = useState(false);
  const start = () => {setPlaying(true); const video=player.current; if(video)void video.play().catch(()=>{setPlaying(false);});};
  return (
    <div className="content-stretch flex gap-[var(--other\/gap\/9,16px)] items-start relative size-full" data-node-id="5:1430" data-name="Video">
      <div className="bg-[var(--color\/gray\/50,#f7f7f7)] flex-[1_0_0] h-full min-w-px overflow-clip relative" data-node-id="5:1431" data-name="Image">
        <video ref={player} src="/musium-media-v2/testimonial-performance.mp4" controls={playing} playsInline preload="none" aria-label="Musium piano performance" className="absolute inset-0 h-full w-full object-cover" style={{display:playing?"block":"none"}} />
        {!playing && <><div className="-translate-x-1/2 -translate-y-1/2 absolute h-[957.692px] left-1/2 top-1/2 w-[1440px]" data-node-id="5:1432" data-name="image 1696">
          <img alt="Students gathered for a studio piano performance" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1696} />
        </div>
        <button type="button" onClick={start} aria-label="Play Musium piano performance" className="cursor-pointer -translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[5px] bg-[rgba(255,255,255,0.7)] border-20 border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start left-1/2 p-[var(--other\/gap\/10,20px)] rounded-[var(--other\/radius\/full-corner,999px)] top-1/2" data-node-id="5:1433" data-name="Button">
          <div className="relative shrink-0 size-[24px]" data-node-id="I5:1433;15:4086" data-name="Huge-icon/user/outline/user">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHugeIconMultimediaAndAudioOutlinePlay} />
          </div>
        </button></>}
      </div>
    </div>
  );
}
