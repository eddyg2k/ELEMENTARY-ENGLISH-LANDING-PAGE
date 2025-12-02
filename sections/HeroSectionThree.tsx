import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { classNames } from '../function/layering';
import { colorTokens } from '../colors/palette';
import { headingClasses, bodyClasses } from '../fonts/fonts';

export function HeroSectionThree() {
  return (
    <section
      className={classNames(
        'flex flex-col gap-8 px-6 py-14',
        colorTokens.canvas.surface,
        colorTokens.strokes.base,
        'rounded-3xl'
      )}
    >
      <div className="space-y-4">
        <p className={classNames('text-sm uppercase tracking-[0.25em]', colorTokens.accents.muted)}>Third Layer</p>
        <h3 className={classNames('text-3xl md:text-4xl', headingClasses)}>Ready for the next peel?</h3>
        <p className={classNames('max-w-3xl', bodyClasses, colorTokens.accents.muted)}>
          Use this layer to preview upcoming content, share updates, or collect early signups. Every hero section stands on
          its own, so you can remix the story without touching the core layout.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Independent editing" className="border-white/10 bg-white/5 backdrop-blur">
          Swap copy, visuals, or CTAs in this section without refactoring the rest of the page.
        </Card>
        <Card title="Peelable layout" className="border-white/10 bg-white/5 backdrop-blur">
          Treat each block as a separate hero—reorder or duplicate to adjust the journey.
        </Card>
        <Card title="Built for experiments" className="border-white/10 bg-white/5 backdrop-blur">
          Iterate on messaging while keeping the shared styling and structure consistent.
        </Card>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button className="border-white/30 px-5 py-3 text-base">Add another layer</Button>
        <Button className="border-white/20 px-5 py-3 text-base" muted>
          Export this slice
        </Button>
      </div>
    </section>
  );
}
