/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className="flex items-center justify-center w-full h-[50px] bg-purple-900 rounded-md hover:bg-purple-800"
    >
      {children}
    </button>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-32px)] w-[80px] py-4 px-2 rounded-md border border-purple-900">
      <ul className="flex flex-col gap-4  ">
        <li>
          <Button onClick={() => navigate('/')}>A</Button>
        </li>
        <li>
          <Button onClick={() => navigate('/checker')}>C</Button>
        </li>
        <li>
          <Button>A</Button>
        </li>
      </ul>
    </div>
  );
}
