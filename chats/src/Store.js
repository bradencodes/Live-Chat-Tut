import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initState = {
  General: [
    { from: 'aaron', msg: 'hello' },
    { from: 'arnold', msg: 'hey whatsup' },
    { from: 'archer', msg: 'not much' }
  ],
  Coding: [
    { from: 'betty', msg: 'hey' },
    { from: 'sam', msg: 'hi' },
    { from: 'doug', msg: 'howdy' }
  ]
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case 'RECIEVE_MESSAGE':
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };
    default:
      return state;
  }
}

let socket;

function sendChatAction(value) {
  socket.emit('chat message', value);
}

export default function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initState);

  if (!socket) {
    socket = io(':3001');
    socket.on('chat message', function(msg) {
      dispatch({payload: msg, type: 'RECIEVE_MESSAGE'});
    });
  }

  const user = 'Braden' + Math.random(100).toFixed(2);

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  );
}
