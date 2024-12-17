import { CDN_URL } from "../../utils/constants";

interface RestaurantCardProps {
  resData: {
    cloudinaryImageId: string;
    name: string;
    cuisines: string[];
    avgRatingString: string;
    sla: {
      slaString: string;
    };
  };
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ resData }) => {
  let newUrl = CDN_URL.replace("ywbucwbbxpo0ugaptvp0", resData.cloudinaryImageId);
  return (
    <div className="m-4 p-4 w-[250px] bg-slate-100 flex flex-col rounded-xl items-center hover:bg-slate-200">
      <img className="res-logo w-[100%] h-[50%] rounded-xl" src={newUrl} />
      <h3 className="font-bold font-sans py-5 text-lg">{resData.name}</h3>
      <h4>{resData.cuisines[0]}</h4>
      <h5>{resData.avgRatingString}</h5>
      <h5>{resData.sla.slaString}</h5>
    </div>
  );
};

export const withPromotedLabel = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => (
    <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded">Promoted</label>
      <WrappedComponent {...props} />
    </div>
  );
};

export default RestaurantCard
