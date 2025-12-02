import { useMemo } from 'react';
import { HeroSectionOne } from '../sections/HeroSectionOne';
import { HeroSectionTwo } from '../sections/HeroSectionTwo';
import { HeroSectionThree } from '../sections/HeroSectionThree';
import { LayeredBackdrop } from '../backgrounds/LayeredBackdrop';
import { buildLayerMotion, classNames } from '../function/layering';
import { colorTokens } from '../colors/palette';

const heroSections = [
  { id: 'layer-1', component: <HeroSectionOne /> },
  { id: 'layer-2', component: <HeroSectionTwo /> },
  { id: 'layer-3', component: <HeroSectionThree /> }
];

export function App() {
  const layers = useMemo(() => heroSections.map((section, index) => ({
    ...section,
    motion: buildLayerMotion(index, heroSections.length)
  })), []);

  return (
    <LayeredBackdrop className={classNames('min-h-screen px-4 py-12 md:px-10', colorTokens.canvas.primary)}>
      <main className="mx-auto flex max-w-6xl flex-col gap-8">
        {layers.map(({ id, component, motion }, idx) => (
          <div
            key={id}
            style={{ transform: motion.translate, filter: motion.blur, opacity: motion.opacity }}
            className="transition-transform duration-500 will-change-transform"
          >
            {component}
            {idx < layers.length - 1 && <div className="mt-6 h-4" aria-hidden />} 
          </div>
        ))}
      </main>
    </LayeredBackdrop>
  );
}
