import React from 'react';
import { Composition } from 'remotion';
import { StomachAcidViral } from './StomachAcid_VIRAL';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="StomachAcid"
				component={StomachAcidViral}
				durationInFrames={2400}
				fps={60}
				width={1080}
				height={1920}
			/>
		</>
	);
};
