import { GridItemType } from "../../types/GridItemType";
import * as C from "./styles";
import b7 from "../../svgs/b7.svg";
import { items } from "../../data/items";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container showBackground={item.permanentShown} onClick={onClick}>
      {!item.permanentShown && !item.shown && <C.Icon src={b7} opacity={.1} alt="" />}
      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt="" />
      )}
    </C.Container>
  );
};
