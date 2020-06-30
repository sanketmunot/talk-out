export const THREADS = [
    {
        thread_id:1,
        title:'thread 1',
        description:'This is content of thread 1',
        doc: '1/2/1998',
        owner:'foo',
        comments:[
            {
                index:1,
                replier:'bar',
                reply:'bar replied here',
                doc: '1/2/1998',
                upVote:2,
                downVote:1
            },
            {
                index:2,
                replier:'jack',
                reply:'jack replied here',
                doc: '1/2/1998',
                upVote:3,
                downVote:2
            }
        ]
    },

    {
        thread_id:2,
        title:'thread 2',
        description:'hey there this is thread 2',
        doc: '1/2/1998',
        owner:'bar',
        comments:[
            {
                index:1,
                replier:'john',
                reply:'john replied positive',
                doc: '1/2/1998',
                upVote:4,
                downVote:1
            },
            {
                index:2,
                replier:'jack',
                reply:'jack replied negatively',
                doc: '1/2/1998',
                upVote:4,
                downVote:1
            },
            {
                index:3,
                replier:'bar',
                reply:'bar replied here',
                doc: '1/2/1998',
                upVote:0,
                downVote:0
            }
        ]
    },

    {
        thread_id:3,
        title:'thread 3',
        description:'welcome to threa d3',
        doc: '1/2/1998',
        owner:'john',
        comments:[
            {
                index:1,
                replier:'jill',
                reply:'jill',
                doc: '1/2/1998',
                upVote:2,
                downVote:1
            },
            {
                index:2,
                replier:'john',
                reply:'john replied to jill',
                doc: '1/2/1998',
                upVote:3,
                downVote:1
            },
            {
                index:3,
                replier:'jill',
                reply:'jill corrected himself',
                doc: '1/2/1998',
                upVote:5,
                downVote:2
            }
        ]
    }
]