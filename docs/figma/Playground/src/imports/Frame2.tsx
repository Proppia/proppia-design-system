import imgFrame2 from "figma:asset/9d56fdc0f3d49e60cfdae8aaa87d29f7908d786a.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame2} />
      </div>
    </div>
  );
}