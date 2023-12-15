import classNames from "classnames";
import TabItem, { tabColors, tabSizes } from "./TabItem";
import { TabOption } from "@/types/tab";

const tabAlign = {
  line: "flex gap-4",
  square: "grid grid-cols-2 gap-4",
};

export interface TabProps<T> {
  options: TabOption<T>[];
  selected: T;
  setSelected: (selected: T) => void;
  size: keyof typeof tabSizes;
  baseColor: keyof typeof tabColors;
  pointColor: keyof typeof tabColors;
  align: keyof typeof tabAlign;
  rounded?: boolean;
}

const Tab = <T,>({
  options,
  selected,
  setSelected,
  size,
  baseColor,
  pointColor,
  align,
  rounded,
}: TabProps<T>) => {
  const tabStyle = classNames(tabAlign[align]);
  const getColor = (option: TabOption<T>) => {
    return option.type === selected ? pointColor : baseColor;
  };

  const handleSelect = (type: T) => {
    setSelected(type);
  };

  return (
    <div className={tabStyle}>
      {options.map((option: TabOption<T>) => (
        <TabItem
          color={getColor(option)}
          size={size}
          text={option.text}
          onClick={() => handleSelect(option.type)}
          rounded={rounded}
        />
      ))}
    </div>
  );
};
export default Tab;
