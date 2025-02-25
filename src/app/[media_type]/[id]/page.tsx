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
  const details:Details = await getDetails(params.media_type, params.id);
  const credits:Credits = await GetCredits(params.media_type, params.id);
  return <DetailspageClient details={details} credits={credits}/>;
}