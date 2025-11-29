import VideoMenuBase from './VideoMenuBase';
import { videoMap } from './fakeDB';



const VideoBase = ({ gameTitle }: { gameTitle: string }) => {
  const data = videoMap[gameTitle];
  return (
    <div>
      <VideoMenuBase mainTitle={gameTitle} data={data}></VideoMenuBase>
    </div>
  );
};

export default VideoBase;
