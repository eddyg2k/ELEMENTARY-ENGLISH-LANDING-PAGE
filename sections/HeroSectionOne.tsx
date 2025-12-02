import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { classNames } from '../function/layering';
import { colorTokens } from '../colors/palette';
import { headingClasses, bodyClasses } from '../fonts/fonts';

export function HeroSectionOne() {
  return (
    <section
      className={classNames(
        'grid gap-10 px-6 py-16 md:grid-cols-2 md:items-center',
        colorTokens.canvas.surface,
        colorTokens.strokes.base,
        'rounded-3xl'
      )}
    >
      <div className="space-y-6">
        <p className={classNames('text-sm uppercase tracking-[0.25em]', colorTokens.accents.muted)}>First Layer</p>
        <h1 className={classNames('text-4xl md:text-5xl', headingClasses)}>Build confident English, one adventure at a time.</h1>
        <p className={classNames('max-w-xl', bodyClasses, colorTokens.accents.muted)}>
          Discover lively mini-stories, guided practice, and instant feedback that keep young learners motivated from the
          very first word.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button className="border-white/30 px-5 py-3 text-base">Start exploring</Button>
          <Button className="border-white/20 px-5 py-3 text-base" muted>
            See how it works
          </Button>
        </div>
      </div>
      <Card title="What to expect" className="border-white/10 bg-white/5 backdrop-blur">
        <ul className="space-y-2 text-sm text-slate-200">
          <li>✔️ Story-based lessons tailored for ages 7–12.</li>
          <li>✔️ Guided pronunciation with playful cues.</li>
          <li>✔️ Visual progress that rewards every small win.</li>
        </ul>
      </Card>
    </section>
  );
}
