import { useState } from 'react';
import { SeatContainer } from './SeatStyles';
import CheckIcon from '../../public/check.svg';

interface SeatProps {
  // section: string;
  row: string;
  number: number;
  // price: number;
}

function Seat({ row, number }: SeatProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <SeatContainer onClick={handleClick}>
      <div>
        {(isSelected && <p>{`${row.toUpperCase()}${number}`}</p>) || (
          <img src={CheckIcon} alt="check icon" />
        )}
      </div>
    </SeatContainer>
  );
}

export default Seat;
