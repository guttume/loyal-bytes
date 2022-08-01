import { images } from "../../components";

export const CourseItem = () => {
  return (
    <div>
      <img
        src={images.corporateTrainingVodafone}
        alt="vodafone logo"
        className="w-96"
      />
      <ul className="my-8 space-y-2 list-disc pr-4 pl-8">
        {[
          "WINDOWS 10 FOR ENTERPRISE (Banglore)",
          "WINDOWS SERVER 2012 and ADFS 3.0",
          "WINDOWS 10 FOR ENTERPRISE (Pune)",
          "WINDOWS 10 FOR ENTERPRISE (Kolkata)",
          "WINDOWS 10 FOR ENTERPRISE (Chennai)",
        ].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
