export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'lorem ipsum ad nulla occeatuc eiusmon qui enim voluptate yustiu. Conquesat autute cillum laborum',
            picture: null,
        },
        {
            id: new Date().getTime() + 10,
            date: new Date().toDateString(),
            text: 'lorem ipsum ad nulla occeatuc eiusmon qui enim voluptate yustiu. Conquesat autute cillum laborum ad coplor poresum',
            picture: null,
        },
        {
            id: new Date().getTime() + 20,
            date: new Date().toDateString(),
            text: 'lorem ipsum ad nulla occeatuc eiusmon qui enim voluptate yustiu. Conquesat autute cillum laborum ad coplor  vaki olpe turruru',
            picture: null,
        }
    ]
}) 