import React, { useRef, useEffect } from 'react';

export interface VideoAssetProps {
    src: string;
}

const VideoAsset: React.FC<VideoAssetProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleError = (e: Event) => {
                console.error('Video error:', e);
            };
            
            const handleLoadStart = () => {
                // Video started loading
            };
            
            video.addEventListener('error', handleError);
            video.addEventListener('loadstart', handleLoadStart);
            
            // Try to load the video
            video.load();
            
            return () => {
                video.removeEventListener('error', handleError);
                video.removeEventListener('loadstart', handleLoadStart);
            };
        }
    }, [src]);

    return (
        <div style={styles.container}>
            <video
                ref={videoRef}
                style={styles.video}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controls={false}
            />
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
    },
};

export default VideoAsset;
