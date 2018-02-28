
const emojiMap = [
    { title: 'Frozen', emoji: '❄ �'},
    { title: 'Finding Nemo', emoji: '��'},
    { title: 'Kung Fu Panda', emoji: '���'},
    { title: 'Harry Potter', emoji: '��⚡'},
    { title: 'Hunger Games', emoji: '���'},
    { title: 'The Lion King', emoji: '��'},
    { title: 'ET', emoji: '���'},
];

function searchMovies(query) {
    return emojiMap.filter((movie: any) => {
        return movie.title.includes(query)
    });
}

expect.addSnapshotSerializer({
    test: (val) => val.title && val.emoji,
    print: (val) => `${val.emoji} ${val.title}`
});

it('Search Movies', () => {
    expect(searchMovies('F')).toMatchSnapshot();
})