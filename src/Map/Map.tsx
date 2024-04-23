import Seat from '../Seat/Seat';

function Map() {
  return (
    <div className="area">
      <Seat section="VIP" row="A" number={17} price={78.9} />
      <Seat section="VIP" row="A" number={17} price={78.9} />
      <Seat section="VIP" row="A" number={17} price={78.9} />
      <Seat section="VIP" row="A" number={17} price={78.9} />
      <Seat section="VIP" row="A" number={17} price={78.9} />
      <Seat section="VIP" row="A" number={17} price={78.9} />
    </div>
  );
}

export default Map;
