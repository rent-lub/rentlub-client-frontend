import {
  Dress,
  Books,
  Barbell,
  Heartbeat,
  Headphones,
  SuitcaseRolling,
  HouseLine,
  Package,
  Car,
  Television,
  IconContext,
  Icon,
  IconProps,
} from "@phosphor-icons/react";
import React from "react";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";

export const buildIcon = (cat: ShoppingCatEnum) => {
  switch (cat) {
    case ShoppingCatEnum.Fashion:
      return <CustomIcon icon={<Dress size={17} />} />;
    case ShoppingCatEnum.Book:
      return <CustomIcon icon={<Books size={17} />} />;
    case ShoppingCatEnum.Sport:
      return <CustomIcon icon={<Barbell size={17} />} />;
    case ShoppingCatEnum.HealthAndBeauty:
      return <CustomIcon icon={<Heartbeat size={17} />} />;
    case ShoppingCatEnum.ItGadget:
      return <CustomIcon icon={<Headphones size={17} />} />;
    case ShoppingCatEnum.Travel:
      return <CustomIcon icon={<SuitcaseRolling size={17} />} />;
    case ShoppingCatEnum.HomeAndGarden:
      return <CustomIcon icon={<HouseLine size={17} />} />;
    case ShoppingCatEnum.All:
      return <CustomIcon icon={<Package size={17} />} />;
    case ShoppingCatEnum.Vehicle:
      return <CustomIcon icon={<Car size={17} />} />;
    case ShoppingCatEnum.Electric:
      return <CustomIcon icon={<Television size={17} />} />;
  }
};

interface customIconProps {
  icon: React.ReactElement<any, string>;
  style?: IconProps;
}

export const CustomIcon: React.FC<customIconProps> = ({
  icon,
  style,
  ...props
}) => {
  return (
    <>
      <IconContext.Provider
        value={{
          ...style,
          size: style?.size ?? 20,
          weight: style?.weight ?? "bold",
        }}
      >
        {icon}
      </IconContext.Provider>
    </>
  );
};
