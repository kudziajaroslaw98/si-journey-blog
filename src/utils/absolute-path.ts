export default function getAbsolutePath() {
	if (process.env.NEXT_VERCEL_ENV === 'PROD') {
		return 'https://si-journey-blog.vercel.app';
	}
	if (process.env.NEXT_VERCEL_ENV === 'DEV') {
		return 'https://si-journey-blog-git-develop-kj44389.vercel.app';
	}
	return 'http://localhost:3000';
}
