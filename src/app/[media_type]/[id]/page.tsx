import DetailspageClient from '@/components/DetailsPageClient';
import { GetCredits, getDetails, getVideos } from '@/lib/getMovies';
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
  const videos = await getVideos(id,media_type)
  const details:Details = await getDetails(media_type, id);
  const credits:Credits = await GetCredits(media_type, id);
  return <DetailspageClient videos={videos} details={details} credits={credits}/>;
}