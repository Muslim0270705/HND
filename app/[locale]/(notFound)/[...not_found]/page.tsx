import type { Metadata } from 'next';
import {NotFoundPage} from "@/source/pages/shared/not-found";

export const metadata: Metadata = {
	title: 'Not Found',
	description: '',
};

export default function NotFound() {
	return <NotFoundPage />;
}
