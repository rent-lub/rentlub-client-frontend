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
} from "@phosphor-icons/react";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";

export const buildIcon = (cat: ShoppingCatEnum, color?: string) => {
  switch (cat) {
    case ShoppingCatEnum.Fashion:
      return <Dress size={20} />;
    case ShoppingCatEnum.Book:
      return <Books size={20} />;
    case ShoppingCatEnum.Sport:
      return <Barbell size={20} />;
    case ShoppingCatEnum.HealthAndBeauty:
      return <Heartbeat size={20} />;
    case ShoppingCatEnum.ItGadget:
      return <Headphones size={20} />;
    case ShoppingCatEnum.Travel:
      return <SuitcaseRolling size={20} />;
    case ShoppingCatEnum.HomeAndGarden:
      return <HouseLine size={20} />;
    case ShoppingCatEnum.All:
      return <Package size={20} />;
    case ShoppingCatEnum.Vehicle:
      return <Car size={20} />;
    case ShoppingCatEnum.Electric:
      return <Television size={20} />;
  }
};
