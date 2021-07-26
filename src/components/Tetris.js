import React from 'react';
// components
import Stage from './Stage';
import Display from './Display';
import startButton from './StartButton';

const Tetris = () => {


    return(
        <div>
            <aside>
                <div>
               <Display text ="Score" />
               <Display text ="Rows" />
               <Display text ="Level" />
               </div>
               <startButton />
            </aside>
        </div>
    );
};
export default  Tetris;