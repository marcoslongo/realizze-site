import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className='container max-w-[1150px] mx-auto'>
        {children}
    </div>
  );
}