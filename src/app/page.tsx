import { Catalog } from '@/modules/Movies/ui/Catalog/Catalog'
import { Container } from '@/components/ui'
import { AuthModal } from '@/modules/Auth'

export default async function Home() {
	return (
		<Container>
			<Catalog />
			<AuthModal />
		</Container>
	)
}
