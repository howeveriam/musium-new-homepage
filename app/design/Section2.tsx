const imgImage6 = "/musium-media-v2/5-1131-59d18.png";
const imgImage7 = "/musium-media-v2/5-1131-5edff.png";
const imgImage8 = "/musium-media-v2/5-1131-7022f.png";
const imgImage9 = "/musium-media-v2/5-1131-137b7.png";

export default function TrustedByCompanies() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between px-[100px] py-[var(--other\/gap\/16,48px)] relative size-full" data-node-id="5:1131" data-name="Trusted By Companies">
      <div className="bg-white flex items-center justify-center h-[80px] relative shrink-0 w-[160px]" data-node-id="37:211" data-name="01-youtube">
        <img alt="YouTube" className="block h-[36px] w-full max-w-[160px] object-contain pointer-events-none" src={imgImage6} data-node-id="37:212" />
      </div>
      <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-[160px]" data-node-id="37:213" data-name="02-naver">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[50px] left-1/2 top-1/2 w-[160px]" data-node-id="37:214" data-name="image 6">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
        </div>
      </div>
      <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-[160px]" data-node-id="37:215" data-name="03-instagram">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[80px] top-1/2" data-node-id="37:216" data-name="image 7">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        </div>
      </div>
      <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-[160px]" data-node-id="37:217" data-name="04-gmail">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%+0.5px)] top-1/2 w-[53px]" data-node-id="37:218" data-name="image 8">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
        </div>
      </div>
    </div>
  );
}
