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
  Confetti,
  ShirtFolded,
  Heart,
  Snowflake,
  Sneaker,
} from "@phosphor-icons/react";
import React from "react";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";

export const buildIcon = (cat: ShoppingCatEnum) => {
  switch (cat) {
    case ShoppingCatEnum.Party:
      return <CustomIcon icon={<Confetti size={32} weight="light" />} />;
    case ShoppingCatEnum.Suit:
      return <CustomIcon icon={<ShirtFolded size={32} weight="light" />} />;
    case ShoppingCatEnum.Sport:
      return <CustomIcon icon={<Barbell size={32} weight="light" />} />;
    case ShoppingCatEnum.Wedding:
      return <CustomIcon icon={<Heart size={32} weight="light" />} />;
    case ShoppingCatEnum.All:
      return <CustomIcon icon={<Package size={32} weight="light" />} />;
    case ShoppingCatEnum.Jacket:
      return <CustomIcon icon={<Snowflake size={32} weight="light" />} />;
    case ShoppingCatEnum.Sneaker:
      return <CustomIcon icon={<Sneaker size={32} weight="light" />} />;
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
