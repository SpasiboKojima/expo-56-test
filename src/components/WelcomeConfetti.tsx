import { Dimensions } from 'react-native';
import type { CannonConfettiMethods, ConfettiMethods } from 'react-native-fast-confetti';
import { CannonConfetti, Confetti } from 'react-native-fast-confetti';

const { width } = Dimensions.get('window');

interface WelcomeConfettiProps {
  backgroundConfettiRef: React.Ref<ConfettiMethods | null>;
  burstConfettiRef: React.Ref<CannonConfettiMethods | null>;
}

export const WelcomeConfetti = ({ backgroundConfettiRef, burstConfettiRef }: WelcomeConfettiProps) => {
  return (
    <>
      <Confetti ref={backgroundConfettiRef} gravity={1} autoplay={false} count={450}>
        <Confetti.Flake size={8} radius={4} colors={['#FFBF0082']} />
        <Confetti.Flake width={8} height={16} colors={['#FFBF00', '#ff0000', '#0040ff', '#bf00ff', '#00ff40']} />
      </Confetti>
      <CannonConfetti
        gravity={2}
        autoplay={false}
        ref={burstConfettiRef}
        colors={['#FFBF00', '#FFBF00', '#FFBF00', '#ff0000', '#ff0000', '#0040ff', '#bf00ff', '#00ff40']}
      >
        <CannonConfetti.Origin position='center-left' target={{ x: 0, y: 0 }} count={450} initialSpeed={2.5}>
          <CannonConfetti.Flake width={8} height={16} />
        </CannonConfetti.Origin>
        <CannonConfetti.Origin position='center-right' target={{ x: width, y: 0 }} count={450} initialSpeed={2.5}>
          <CannonConfetti.Flake size={10} />
        </CannonConfetti.Origin>
      </CannonConfetti>
    </>
  );
};
