'use client'

import { notFound } from 'next/navigation'
import { Container, Spinner } from '@/components/ui'
import { MovieDetails, useGetMovieDetails } from '@/modules/Movies'

export default function SingleMoviePage({ params }: { params: { id: string } }) {
  const { data, isLoading } = useGetMovieDetails(+params.id)

  if (!data?.data && !isLoading) {
    notFound()
  }

  return (
    <Container>
      {isLoading ? <Spinner /> : data?.data && <MovieDetails movie={data.data} />}
    </Container>
  )
}
