import { featuresData } from '../../utils/data/featuresComponentData';
import CardWithShadow from '../icons/cardWithShadow';

interface IFeature {
  headerText: string;
  subText: string;
  id: number;
}

const Features = () => {
  return (
    <div className="grid grid-cols-2 phone:grid-cols-1 lg:grid-cols-2 py-8 mt-4">
      {featuresData.map((feature: IFeature) => (
        <div
          key={feature.id}
          className="w-[610px] phone:w-[350px] h-[500px] phone:h-[300px] text-center flex items-center justify-center flex-col px-4 bg-[#f4f9ff99] overflow-visible gap-y-10 phone:gap-y-4 mb-8"
        >
          <div className="py-4">
            <h3 className="mb-3 font-bold text-lg">{feature.headerText}</h3>
            <p className="text-sm text-[#131330] opacity-60 h-[50px] mb-8">
              {feature.subText}
            </p>
          </div>
          <CardWithShadow />
        </div>
      ))}
    </div>
  );
};

export default Features;
