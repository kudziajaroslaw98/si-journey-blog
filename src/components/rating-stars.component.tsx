type RatingStarsProps = {
  rating: number;
};

function RatingStarsComponent({ rating }: RatingStarsProps) {
  return <div>{rating}</div>;
}

export default RatingStarsComponent;
