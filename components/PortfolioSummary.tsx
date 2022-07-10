import { images } from "./Images";

export const PortfolioSummary = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-semibold text-2xl mb-4">
          Over top business placements
        </h2>
      </div>
      <div className="flex justify-center space-x-6 flex-wrap my-12">
        <div className="w-32 py-4">
          <img src={images.brandsZepplin} alt="Zepplin logo" />
        </div>
        <div className="w-32 py-4">
          <img src={images.brandsOracle} alt="Oracle logo" />
        </div>
        <div className="w-32 py-4">
          <img src={images.brandsMorpheus} alt="Morpheus logo" />
        </div>
        <div className="w-32 py-4">
          <img src={images.brandsSamsung} alt="Samsung logo" />
        </div>
        <div className="w-32 py-4">
          <img src={images.brandsMonday} alt="Monday logo" />
        </div>
        <div className="w-32 py-4">
          <img src={images.brandsSegment} alt="Segment logo" />
        </div>
        <div className="w-32 py-4">
          <img src={images.brandsProtonet} alt="Protonet logo" />
        </div>
      </div>
      <div className="flex justify-center">
        <a href="#" className="underline text-xl font-bold text-gray-600">
          View all
        </a>
      </div>
    </div>
  );
};
