import { LBaseComponent } from "./LBaseComponent";

const LProductComponent = () => {
  return (
    <>
      {new Array(6).fill(null).map((_, index) => {
        const key = index + 1;
        return <LBaseComponent key={key} />;
      })}
    </>
  );
};

export default LProductComponent;
