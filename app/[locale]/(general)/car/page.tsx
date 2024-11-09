'use client';

import { CarView } from '@/source/entities/car';
import { useTranslations } from 'next-intl';

export default function Home({ }) {
	const t = useTranslations('general');
	return (
		<>
			<CarView />
		</>
	);
}
