import { comment } from 'postcss';
import React from 'react';

const CommentData = [
  {
    name: "Rohit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    replies: [
      {
        name: "Satyarth",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
      },
    ]
  },
  {
    name: "Satyarth",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    replies: [
      {
        name: "Rohit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
      },
    ]
  },
  {
    name: "Satyarth",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
  },
  {
    name: "Satyarth",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
  },
  {
    name: "Satyarth",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
  },
];

// Single Comment Component (Recursive for replies)
const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className='ml-5 my-2'>
      <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
        <img
          className='h-8 w-8 rounded-full'
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
        />
        <div className='ml-2'>
          <h3 className='font-normal'>{name}</h3>
          <p className='text-sm'>{text}</p>
        </div>
      </div>

      {/* Render replies recursively */}
      {replies && replies.length > 0 && (
        <div className='ml-5 border-l-2 border-gray-300 pl-2'>
          {replies.map((reply, index) => (
            <Comment key={index} data={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

const commentList= () => {
    return  CommentData.map((comment) => <Comment data={comment} />)
}

// Comment Container Component
const CommentContainer = () => {
  return (
    <div className='ml-5'>
      <h1 className='text-2xl font-bold my-2'>Comments</h1>
      {CommentData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentContainer;
