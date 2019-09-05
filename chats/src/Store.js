import React from 'react'

export const CTX = React.createContext();

const initState = {
  General: [
    {from: 'aaron', msg: 'hello'},
    {from: 'arnold', msg: 'hey whatsup'},
    {from: 'archer', msg: 'not much'},
  ],
  Coding: [
    {from: 'betty', msg: 'hey'},
    {from: 'sam', msg: 'hi'},
    {from: 'doug', msg: 'howdy'},
  ],
}

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch(action.type) {
    case 'RECIEVE_MESSAGE':
      return {
        ...state,
        [topic]: [
          ...state[topic],
          { from, msg }
        ]
      }
    default:
      return state
  }
}

export default function Store(props) {

  const reducerHook = React.useReducer(reducer, initState);

  return (
    <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
  )
}