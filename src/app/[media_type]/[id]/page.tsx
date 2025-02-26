import DetailspageClient from '@/components/DetailsPageClient';
import getImagePath from '@/lib/getImagePath';
import { GetCredits, getDetails } from '@/lib/getMovies';
import { Credits, Details } from '../../../../typings';

type Params = {
  params: {
    media_type: string;
    id: string;
  };
};

export default async function Detailspage({ params }: Params) {
  const {media_type} = await params
  const {id} = await params
  const details:Details = await getDetails(media_type, id);
  const credits:Credits = await GetCredits(media_type, id);
  return <DetailspageClient details={details} credits={credits}/>;
}