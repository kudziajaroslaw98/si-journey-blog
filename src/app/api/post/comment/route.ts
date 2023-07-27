import { NextRequest, NextResponse } from 'next/server';
import { clientReadWrite } from '@/sanity/lib/client.ts';

const validateNickname = (nickname: string) =>
	!(nickname.length < 3 || nickname.length > 30);

const validateMessage = (message: string) =>
	!(message.length < 3 || message.length > 180);

const sanitize = (input: string) => {
	const map: Record<string, string> = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;',
		'/': '&#47;',
	};
	const reg = /[&<>"'/]/gi;

	return input.replace(reg, (match) => map[match]);
};

export async function POST(req: NextRequest) {
	// TODO: add csrf token protection

	const { nickname, message, postId } = await req.json();
	const isNicknameValid = validateNickname(nickname);
	const isMessageValid = validateMessage(nickname);
	const sanitizedNickname = sanitize(nickname);
	const sanitizedMessage = sanitize(message);

	if (!isNicknameValid || !isMessageValid) {
		return NextResponse.json({
			status: 400,
			json: {
				error: 'Invalid nickname or message',
				nickname: sanitizedNickname,
				message: sanitizedMessage,
			},
		});
	}

	const isNicknameIncludingLinks =
		sanitizedNickname.includes('http') || sanitizedNickname.includes('www');
	const isMessageIncludingLinks =
		sanitizedMessage.includes('http') || sanitizedMessage.includes('www');

	await clientReadWrite.create({
		_type: 'comment',
		name: sanitizedNickname,
		approved: !isMessageIncludingLinks || !isNicknameIncludingLinks,
		message: sanitizedMessage,
		postReference: { _ref: postId, _type: 'reference' },
	});

	return NextResponse.json({
		status: 201,
		json: {
			nickname: sanitizedNickname,
			message: sanitizedMessage,
		},
	});
}
