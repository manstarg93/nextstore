import { RatingComponentContainer } from './RatingComponentStyles';
import { AiFillStar } from 'react-icons/ai';
interface Irating {
  rating: number;
}

export const RatingComponent = ({ rating }: Irating) => {
  return (
    <RatingComponentContainer>
      {Array<number>(Math.round(rating))
        .fill(0)
        .map((rat, i) => {
          return <AiFillStar key={i} />;
        })}
    </RatingComponentContainer>
  );
};
