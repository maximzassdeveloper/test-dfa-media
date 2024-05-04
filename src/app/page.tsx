import { Catalog } from '@/modules/Movies'
import { Container } from '@/components/ui'

export default async function Home() {
  return (
    <Container>
      <Catalog />
    </Container>
  )
}
