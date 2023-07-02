type RatingTextProps = {
  rating: number;
};
function RatingTextComponent({ rating }: RatingTextProps) {
  const getRatingText = (ratingNumber: number) => {
    if (ratingNumber < 3) {
      return '';
    }
    if (ratingNumber >= 3 && ratingNumber < 4) {
      return 'Worth a look';
    }

    if (ratingNumber >= 4 && ratingNumber < 5) {
      return 'Must read';
    }
    return 'Standout read';
  };
  const ratingText = getRatingText(rating);
  return <span className="text-xs">{ratingText}</span>;
}

export default RatingTextComponent;
