import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  state: 0, //0 = default page, 1 = comment
  login : false,
  comment : false,
  post: {
    title:"",
    body:"",
    author:"",
    imgUrl:"",
  }
});

export const setState = (state: number) => {
  setGlobalState('state', state);
};

export const setComment = (comment: boolean) => {
  setGlobalState('comment', comment);
};

export const setLogin = (login: boolean) => {
  setGlobalState('login', login);
};

export const setPost = (post: {title: string, body: string, author: string, imgUrl: string,}) => {
    setGlobalState('post', post);
  };



export { useGlobalState };