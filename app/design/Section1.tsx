const imgImage5 = "/musium-media-v2/hero-original.png";
const imgGroup1 = "/musium-media-v2/5-1096-8d99b.svg";
const imgHugeIconArrowsOutlineArrowRight = "/musium-media-v2/5-1096-aaa75.svg";
const imgImage4 = "/musium-media-v2/5-1096-9987a.svg";
const imgBranch1 = "/musium-media-v2/5-1096-a8f37.svg";
const imgCrown1 = "/musium-media-v2/5-1096-9facd.svg";
const imgVector = "/musium-media-v2/5-1096-e8a7b.svg";
const imgGroup = "/musium-media-v2/5-1096-90f2d.svg";

export default function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start justify-center pb-[var(--other\/gap\/16,48px)] pt-[var(--other\/gap\/15,40px)] px-[100px] relative size-full" data-node-id="5:1096" data-name="Hero Section">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-center w-full" data-node-id="87:380">
        <p className="font-sans font-semibold leading-[0] relative shrink-0 text-[72px] text-[color:var(--color\/dark\/500,#04080d)] tracking-[-1.44px] w-full whitespace-pre-wrap" data-node-id="5:1097">
          <span className="leading-[1.25]">
            {`Studio lessons in Schaumburg `}
            <br aria-hidden />
            with Dami Jeong
            <br aria-hidden />
          </span>
          <span className="leading-[1.25] text-[#2b75cc]">MTNA* award-winning</span>
          <span className="leading-[1.25]">{` teacher`}</span>
        </p>
        <p className="font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--color\/gray\/700,#7b7b7b)] w-full" data-node-id="87:378">
          *MTNA (Music Teachers National Association)
        </p>
      </div>
      <div className="content-stretch flex gap-[var(--other\/gap\/9,16px)] h-[700px] items-center relative shrink-0 w-full" data-node-id="5:1098" data-name="Image">
        <div className="content-stretch flex flex-col gap-[var(--other\/gap\/9,16px)] h-full items-start relative shrink-0 w-[280px]" data-node-id="5:1099" data-name="Row_2">
          <div className="bg-[var(--color\/primary\/500,#2b75cc)] content-stretch flex flex-col h-[280px] items-start justify-between overflow-clip p-[var(--other\/gap\/13,32px)] relative rounded-[var(--other\/radius\/xl2,24px)] shrink-0 w-full" data-node-id="5:1100" data-name="4">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--other\/gap\/3,4px)] items-start relative shrink-0 text-[color:var(--color\/netural\/white,white)] w-full" data-node-id="5:1101">
              <p className="font-sans font-semibold leading-[1.26] relative shrink-0 text-[48px] tracking-[-0.96px] w-full" data-node-id="5:1102">
                24k subs
              </p>
              <p className="font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] w-full" data-node-id="5:1103">
                well-known online YouTube piano education channel “Musium.”
              </p>
            </div>
            <a href="https://www.youtube.com/@PianoMusium" target="_blank" rel="noopener noreferrer" aria-label="Piano Musium on YouTube" className="block h-[46.525px] relative shrink-0 w-[207.999px]" data-node-id="94:180">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
            </a>
          </div>
          <div className="bg-[var(--color\/primary\/50,#f2f6fd)] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip px-[var(--other\/gap\/13,32px)] py-[12px] relative rounded-[var(--other\/radius\/xl2,24px)] w-[500px]" data-node-id="5:1109" data-name="5">
            <div className="content-stretch flex flex-col gap-[var(--other\/gap\/13,32px)] items-start relative shrink-0 w-full" data-node-id="5:1110">
              <p className="[word-break:break-word] font-sans font-normal leading-[1.72] min-w-full relative shrink-0 text-[24px] text-[color:var(--color\/dark\/500,#04080d)] tracking-[-0.48px] w-[min-content]" data-node-id="5:1111">
                As the founder of Musium, Dami brings a pedagogy-first approach to every lesson — patient, structured, and tailored to how each student learns, from first-time beginners to returning pianists.
              </p>
              <div className="bg-[var(--color\/primary\/500,#2b75cc)] content-stretch flex flex-col items-start pl-[var(--other\/gap\/11,24px)] pr-[var(--other\/gap\/3,4px)] py-[var(--other\/gap\/3,4px)] relative rounded-[var(--other\/radius\/full-corner,999px)] shrink-0" data-node-id="5:1112" data-name="Button">
                <div className="content-stretch flex gap-[var(--other\/gap\/6,10px)] items-center relative shrink-0" data-node-id="I5:1112;15:5020">
                  <p className="[word-break:break-word] font-sans font-medium leading-[1.5] relative shrink-0 text-[16px] text-[color:var(--color\/netural\/white,white)] text-center tracking-[-0.32px] whitespace-nowrap" data-node-id="I5:1112;15:5022">
                    Book Free Consultation
                  </p>
                  <div className="bg-[var(--color\/netural\/white,white)] content-stretch flex flex-col items-start p-[var(--other\/gap\/7,12px)] relative rounded-[var(--other\/radius\/full-corner,999px)] shrink-0" data-node-id="I5:1112;4812:8775" data-name="Button">
                    <div className="relative shrink-0 size-[24px]" data-node-id="I5:1112;4812:8775;15:5018" data-name="Huge-icon/user/outline/user">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHugeIconArrowsOutlineArrowRight} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--other\/gap\/9,16px)] h-full items-start min-w-px relative" data-node-id="5:1113" data-name="Row_1">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+26px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[648px_700px] size-[700px] top-1/2" data-node-id="5:2899" style={{ maskImage: `url("${imgImage4}")` }} data-name="image 4">
            <img alt="Dami Jeong guiding a student at the piano" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--other\/gap\/9,16px)] h-full items-start relative shrink-0 w-[280px]" data-node-id="5:1116" data-name="Row_1">
          <div className="bg-[var(--color\/primary\/50,#f2f6fd)] content-stretch flex flex-col h-[342px] items-center justify-center overflow-clip px-[24px] relative rounded-[var(--other\/radius\/xl2,24px)] shrink-0 w-full" data-node-id="5:1117" data-name="3">
            <div className="content-stretch flex flex-col gap-[16px] h-[342px] items-center justify-center py-[32px] relative shrink-0 w-[280px]" data-node-id="39:226">
              <div className="relative shrink-0 size-[96px]" data-node-id="39:172" data-name="Branch 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBranch1} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-center w-[240px]" data-node-id="39:225">
                <p className="font-['Aleo:Bold'] font-bold leading-[28px] relative shrink-0 text-[#e89b05] text-[24px] tracking-[1px] uppercase w-full" data-node-id="39:220">
                  Best Teacher of the Year
                </p>
                <p className="font-['Abril_Fatface:Regular'] leading-[32px] lowercase not-italic relative shrink-0 text-[#9b0f15] text-[28px] tracking-[1.6px] w-full" data-node-id="39:219">
                  2008 · 2009
                </p>
                <p className="font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--color\/gray\/700,#7b7b7b)] w-full" data-node-id="39:221">
                  MTNA (Music Teachers National Association)
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--color\/primary\/50,#f2f6fd)] content-stretch flex flex-col h-[342px] items-center justify-center overflow-clip px-[24px] relative rounded-[var(--other\/radius\/xl2,24px)] shrink-0 w-full" data-node-id="87:387" data-name="4">
            <div className="content-stretch flex flex-col gap-[16px] h-[342px] items-center justify-center py-[32px] relative shrink-0 w-[280px]" data-node-id="87:388">
              <div className="relative shrink-0 size-[96px]" data-node-id="87:442" data-name="Crown 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCrown1} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 text-center w-[240px]" data-node-id="87:436">
                <p className="font-['Aleo:Bold'] font-bold leading-[28px] relative shrink-0 text-[#e89b05] text-[24px] tracking-[1px] uppercase w-[280px]" data-node-id="87:437">
                  Golden Teacher Awards
                </p>
                <p className="font-['Abril_Fatface:Regular'] leading-[32px] lowercase min-w-full not-italic relative shrink-0 text-[#9b0f15] text-[28px] tracking-[1.6px] w-[min-content]" data-node-id="87:438">
                  2016
                </p>
                <p className="font-sans font-normal leading-[1.4] min-w-full relative shrink-0 text-[16px] text-[color:var(--color\/gray\/700,#7b7b7b)] w-[min-content]" data-node-id="87:439">
                  MTNA (Music Teachers National Association)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[110.199px] items-center justify-center left-[345.45px] top-[132.93px] w-[100.376px]" data-node-id="5:1125">
        <div className="flex-none rotate-[0.83deg]">
          <div className="h-[73.119px] relative w-[90.085px]" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[48.128px] items-center justify-center left-[1211px] top-[209px] w-[47.032px]" data-node-id="5:1126">
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="h-[47.032px] relative w-[48.128px]" data-name="Highlight_03">
            <div className="absolute inset-[-478.52%_191.42%_512.29%_-157.65%]" data-node-id="5:1127" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full rotate-180" src={imgGroup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
