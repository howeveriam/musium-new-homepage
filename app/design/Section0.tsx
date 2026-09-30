const imgGroup2 = "/musium-media-v2/16-257-a2bdd.svg";
const imgMaskGroup = "/musium-media-v2/16-257-26ec6.svg";
const imgMaskGroup1 = "/musium-media-v2/16-257-e1ec4.svg";
const imgMaskGroup2 = "/musium-media-v2/16-257-672b7.svg";
const imgFill36 = "/musium-media-v2/16-257-32c53.svg";
const imgFill38 = "/musium-media-v2/16-257-d1ca9.svg";
const imgRectangle = "/musium-media-v2/16-257-bd863.svg";

function MusiumCircleLogo2({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[64px]"} data-node-id="16:305" data-name="musium-circle-logo 2">
      <div className="absolute contents inset-0" data-node-id="16:280" data-name="Page-1">
        <div className="absolute contents inset-0" data-node-id="16:281" data-name="Group-2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
          <div className="absolute contents inset-[30.66%_30.68%_30.29%_30.26%]" data-node-id="16:283" data-name="logo">
            <div className="absolute contents inset-[30.66%_30.68%_30.29%_30.26%]" data-node-id="16:284" data-name="Group">
              <div className="absolute contents inset-[30.66%_57.66%_30.29%_30.26%]" data-node-id="16:285" data-name="Group-3">
                <div className="absolute inset-[30.66%_57.66%_30.29%_30.26%]" data-node-id="16:286" data-name="Mask group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaskGroup} />
                </div>
              </div>
              <div className="absolute contents inset-[30.66%_43.94%_30.29%_43.52%]" data-node-id="16:290" data-name="Group-6">
                <div className="absolute inset-[30.66%_43.94%_30.29%_43.52%]" data-node-id="16:291" data-name="Mask group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaskGroup1} />
                </div>
              </div>
              <div className="absolute contents inset-[30.66%_30.68%_30.29%_57.25%]" data-node-id="16:295" data-name="Group-9">
                <div className="absolute inset-[30.66%_30.68%_30.29%_57.25%]" data-node-id="16:296" data-name="Mask group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaskGroup2} />
                </div>
              </div>
              <div className="absolute inset-[44.43%_51.92%_30.29%_45.74%]" data-node-id="16:300" data-name="Fill-36">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFill36} />
              </div>
              <div className="absolute inset-[44.43%_37.15%_30.29%_60.48%]" data-node-id="16:301" data-name="Fill-38">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFill38} />
              </div>
            </div>
            <div className="absolute inset-[44.74%_59.21%_31.84%_40.26%]" data-node-id="16:302" data-name="Rectangle">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle} />
            </div>
            <div className="absolute inset-[44.74%_44.74%_31.84%_54.74%]" data-node-id="16:303" data-name="Rectangle-Copy">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[var(--color\/netural\/white,white)] content-stretch flex items-center justify-between px-[100px] py-[var(--other\/gap\/9,16px)] relative size-full" data-node-id="16:257" data-name="Header">
      <a href="#top" aria-label="Musium — back to top" className="block shrink-0 rounded-full"><MusiumCircleLogo2 className="overflow-clip relative shrink-0 size-[64px]" /></a>
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-sans font-normal gap-[var(--other\/gap\/11,24px)] items-center justify-center leading-[1.4] min-w-px relative rounded-[var(--other\/radius\/full-corner,999px)] text-[16px] text-[color:var(--color\/dark\/500,#04080d)] text-center whitespace-nowrap" data-node-id="16:259" data-name="All Links">
        <a className="relative shrink-0" data-node-id="16:260" href="#about">About Instructor</a>
        <a className="relative shrink-0" data-node-id="16:261" href="#lessons">Lessons</a>
        <a className="relative shrink-0" data-node-id="16:262" href="#features">Features</a>
        <a className="relative shrink-0" data-node-id="16:263" href="#samples">Sample Lessons</a>
        <a className="relative shrink-0" data-node-id="16:264" href="#testimonials">Testimonial</a>
        <a className="relative shrink-0" data-node-id="94:148" href="#faq">FAQ</a>
        <a className="relative shrink-0" data-node-id="94:149" href="#contact">Contact Us</a>
      </div>
    </div>
  );
}
