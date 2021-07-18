import {combineReducers, createStore} from 'redux';
import {Context, createWrapper} from 'next-redux-wrapper';
import {reducer} from './launch/launch.store';


export const rootStore = combineReducers({
  launch: reducer,
});


export let initialState = {};

// @ts-ignore
export const makeStore = ({ctx}: Context) => {
  let store = createStore(rootStore, initialState);
  // @ts-ignore
  if (ctx) {
    // console.log(ctx.req.session)
    // @ts-ignore
    // console.log('*** Actualizando estado inicial en el servidor');
    initialState = store.getState();
    // console.log('existe', initialState, store.dispatch, store);
    // const session = withSession*()
    // store.dispatch({ type: 'LOGIN', payload: { token: ctx.req.cookies.session } });
    initialState = store.getState();
    return store;
  } else {
    // console.log('*** Actualizando estado inicial despues de mutar el estado');
    initialState = store.getState();
  }
  return store;

};
export type RootState = ReturnType<typeof rootStore>
export const wrapper = createWrapper(makeStore, {debug: false});
