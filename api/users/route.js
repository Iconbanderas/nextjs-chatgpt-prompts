export async function GET(request) {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Uchenna' },
        { id: 3, name: 'Cena' },
        { id: 4, name: 'Matthew' },
        { id: 5, name: 'David' }
    ];

    return new Response(JSON.stringify(users));
}