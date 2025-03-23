import DetailspageClient from "@/components/shared/DetailsPageClient";
import { GetCredits, getDetails, getVideos } from "@/lib/getMovies";
import { Credits, Details } from "../../../../typings";
import { isInWatchList } from "@/actions/movie.action";
import { currentUser } from "@clerk/nextjs/server";

type Params = {
  params: Promise<{
    media_type: string;
    id: string;
  }>;
};

export default async function Detailspage({ params }: Params) {
  const { media_type } = await params;
  const { id } = await params;
  const videos = await getVideos(id, media_type);
  const details: Details = await getDetails(media_type, id);
  const credits: Credits = await GetCredits(media_type, id);

  const user = await currentUser();
  const isAdded = user ? await isInWatchList(user.id, details.id.toString()) : false;

  return (
    <DetailspageClient
      userId={user?.id||''}
      media_type={media_type}
      is_added={isAdded}
      videos={videos}
      details={details}
      credits={credits}
    />
  );
}
