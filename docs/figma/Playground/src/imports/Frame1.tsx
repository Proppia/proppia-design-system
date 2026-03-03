import imgFrame1 from "figma:asset/2cebdceb66987164940deb585b5229bc30de7e6e.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame1} />
      </div>
    </div>
  );
}