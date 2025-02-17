import grainImage from '@/assets/images/grain.jpg';
import { PropsWithChildren, MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = PropsWithChildren<{
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>; // Add onClick prop
  }>;

export const Card = ({ className, children, onClick }: 
    CardProps) => {
    return (
        <div className={twMerge("bg-[#10132E] rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2  after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none", className)} onClick={onClick} role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined}>
            <div 
                className="absolute inset-0 -z-10 opacity-5"
                style={{backgroundImage: `url(${grainImage.src})`}}>
            </div>
            {children}
        </div>
    );
};