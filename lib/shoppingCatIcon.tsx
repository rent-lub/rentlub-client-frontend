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
      return <CustomIcon icon={<Dress />} />;
    case ShoppingCatEnum.Book:
      return <CustomIcon icon={<Books />} />;
    case ShoppingCatEnum.Sport:
      return <CustomIcon icon={<Barbell />} />;
    case ShoppingCatEnum.HealthAndBeauty:
      return <CustomIcon icon={<Heartbeat />} />;
    case ShoppingCatEnum.ItGadget:
      return <CustomIcon icon={<Headphones />} />;
    case ShoppingCatEnum.Travel:
      return <CustomIcon icon={<SuitcaseRolling />} />;
    case ShoppingCatEnum.HomeAndGarden:
      return <CustomIcon icon={<HouseLine />} />;
    case ShoppingCatEnum.All:
      return <CustomIcon icon={<Package />} />;
    case ShoppingCatEnum.Vehicle:
      return <CustomIcon icon={<Car />} />;
    case ShoppingCatEnum.Electric:
      return <CustomIcon icon={<Television />} />;
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
