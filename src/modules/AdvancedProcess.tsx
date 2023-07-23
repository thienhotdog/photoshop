import style from "./css/AdvancedProcess.module.css";
type Data = {
  text: string;
};
const AdvancedProcess = () => {
  const data = [
    {
      text: "White Balancing"
    },
    {
      text: "Image Sharpening"
    },
    {
      text: "Vertical & Horizontal Straightening"
    },
    {
      text: "Remove Minor Blemishes"
    },
    {
      text: "Lens Distortion Removal"
    },
    {
      text: "Brightness & Contrast Adjustment"
    },
    {
      text: "Sky Replacement"
    },
    {
      text: "Lawn Enhancement – Repair or Replace"
    },
    {
      text: "Ocean/River Water Enhancement"
    },
    {
      text: "Remove Pool Cleaners from Water"
    },
    {
      text: "Tone Adjustment"
    },
    {
      text: "TV Screen Replacement"
    },
    {
      text: "Dust Spot Removal"
    },
    {
      text: "Flash Reflection Removal"
    },
    {
      text: "Add Fire to Fireplaces"
    },
    {
      text: "HDR Bracketing with Indoor Window Replacement"
    },
    {
      text: "Remove Photographer’s Reflection"
    }
  ];
  return (
    <div className={style.container}>
      <h3 className="blod text-[42px] text-center">
        OUR US$1.60, 17-STEP ENHANCEMENT PROCESS
      </h3>
      <ol className={style.ol}>
        {data.map((item: Data) => {
          return <li>{item.text}</li>;
        })}
      </ol>
    </div>
  );
};

export default AdvancedProcess;
