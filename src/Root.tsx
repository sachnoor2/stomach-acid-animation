import { registerRoot } from 'remotion';
import { Composition } from 'remotion';
import { StomachAcidViral } from './StomachAcidViral';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StomachAcid"
        component={StomachAcidViral}
        durationInFrames={450} // 7.5 seconds at 60fps
        fps={60}
        width={1080}
        height={1920}
      />
    </>
  );
};

registerRoot(RemotionRoot);
