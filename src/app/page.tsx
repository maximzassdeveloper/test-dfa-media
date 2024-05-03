import { Catalog } from '@/modules/Movies/ui/Catalog/Catalog'
import { Container } from '@/components/ui'

export default async function Home() {
	return (
		<Container>
			<Catalog />
		</Container>
	)
}
