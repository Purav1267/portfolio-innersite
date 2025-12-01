import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface PuravordleAppProps extends WindowAppProps {}

const PuravordleApp: React.FC<PuravordleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={700}
            height={900}
            windowBarIcon="windowGameIcon"
            windowTitle="Puravordle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2025 Purav Malik'}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default PuravordleApp;
