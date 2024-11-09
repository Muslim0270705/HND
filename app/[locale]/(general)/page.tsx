'use client';

import { useAuth } from '@/source/shared/hooks';
import { logout } from '@/source/shared/lib/auth';
import { Button } from 'antd';
import { useTranslations } from 'next-intl';

export default function Home({ }) {
	const t = useTranslations('general');
	const { isLoggedIn, user } = useAuth();

	const onLogout = async () => {
		await logout();
	};

	return (
		<div className='container text-center'>
			{t('appName')} <br />
			{JSON.stringify(user)}
			{isLoggedIn ? (
				<form action={onLogout}>
					<Button htmlType='submit'>Выйти</Button>
				</form>
			) : null}
		</div>
	);
}
