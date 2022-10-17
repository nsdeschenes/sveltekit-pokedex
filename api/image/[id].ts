export async function get(request, response) {
	const { id } = request.query;

	const rawId = id.replace('.png', '');

	const mon = parseInt(rawId, 10);
	if (typeof mon !== 'number') return new Response('Not found', { status: 404 });

	const data = await fetch(
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon}.png`
	);

	const newRes = new Response(data.body);

	newRes.headers.set('Cache-Control', 'max-age=31536000, immutable');

	return response.status(200).json({ data: data.body});
}
