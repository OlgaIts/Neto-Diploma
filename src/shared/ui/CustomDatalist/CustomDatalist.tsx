import { ChangeEvent, memo, useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '../../../hooks/useClickOutside';
import styles from './CustomDatalist.module.scss';

interface List {
  name: string;
}

interface CustomDatalistProps {
  className?: string;
  list: List[];
  onSelect: (cityName: string) => void;
}

export const CustomDatalist = memo(
  ({ className, list, onSelect }: CustomDatalistProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredList, setFilteredList] = useState(list);
    const dataListRef = useRef<HTMLUListElement | null>(null);

    const handleClickOutside = () => {
      setIsOpen(false);
    };

    useClickOutside({
      ref: dataListRef,
      handleClickOutside,
    });

    const closeList = () => {
      setIsOpen(false);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value.toLowerCase();
      setIsOpen(true);
      setFilteredList(
        list.filter((city) => city.name.toLowerCase().includes(inputValue)),
      );
    };

    const handleOptionClick = (cityName: string) => {
      onSelect(cityName);
      setIsOpen(false);
    };

    return (
      <>
        {isOpen && (
          <ul ref={dataListRef} className={className}>
            {filteredList.map((city, index) => (
              <li key={index} onClick={() => handleOptionClick(city.name)}>
                {city.name}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  },
);
CustomDatalist.displayName = 'CustomDatalist';
