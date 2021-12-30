export const GET_POSTS = "GET_POSTS"
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'


export const getPosts = () => ({
    type:GET_POSTS
})

export const getPostSuccess = (posts) => ({
    type:GET_POSTS_SUCCESS,
    payload:posts
})

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
  })


export function fetchPost() {
    return async (dispatch) => {
        dispatch(getPosts())

        try{
            let response= await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = response.json();
            dispatch(getPostSuccess(data))
        }
        catch(error) {
            dispatch(getPostsFailure())
        }
    }
}