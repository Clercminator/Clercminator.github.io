import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

const words = [
  "Performant",
  "Accessible",
  "Confident",
  "Reliable",
  "Honest",
  "Intelligent",
  "Optimist",
  "HardWorker",
  "Team Player"
]

export const TapeSection = () => {
  return (
    <div className='py-16'>
      
      <div className='overflow-x-clip'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex-none gap-4 py-3 animate-move-left [animation-duration:30s]'>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={word} className='inline-flex gap-4 items-center'>
                    <span className='uppercase font-extrabold text-sm tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>{word}</span>
                    <StarIcon className="size-6"/>
                  </div>
                ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
      
    </div>
  );
};
