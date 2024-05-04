import { SingleMovie } from '@/modules/Movies/pages/SingleMovie/SingleMovie'

export default function SingleMoviePage({ params }: { params: { id: string } }) {
  return <SingleMovie movieId={+params.id} />
}
