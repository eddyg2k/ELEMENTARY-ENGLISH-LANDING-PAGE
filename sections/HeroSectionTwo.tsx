import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { classNames } from '../function/layering';
import { colorTokens } from '../colors/palette';
import { headingClasses, bodyClasses } from '../fonts/fonts';

export function HeroSectionTwo() {
  return (
    <section
      className={classNames(
        'grid gap-8 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center',
        colorTokens.canvas.surface,
        colorTokens.strokes.base,
        'rounded-3xl'
      )}
    >
      <Card className="border-white/10 bg-white/5 backdrop-blur" title="Learning pillars">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Hear it</h4>
            <p className={classNames('text-sm', colorTokens.accents.muted)}>Audio cues guide every sound.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Try it</h4>
            <p className={classNames('text-sm', colorTokens.accents.muted)}>Quick prompts keep practice playful.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">See it</h4>
            <p className={classNames('text-sm', colorTokens.accents.muted)}>Bright visuals connect words to feelings.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Own it</h4>
            <p className={classNames('text-sm', colorTokens.accents.muted)}>Progress rings celebrate every step.</p>
          </div>
        </div>
      </Card>
      <div className="space-y-6">
        <p className={classNames('text-sm uppercase tracking-[0.25em]', colorTokens.accents.muted)}>Second Layer</p>
        <h2 className={classNames('text-3xl md:text-4xl', headingClasses)}>Layers you can peel back independently.</h2>
        <p className={classNames('max-w-xl', bodyClasses, colorTokens.accents.muted)}>
          Each hero block is its own slice—swap, reorder, or rebuild without touching the rest. Keep the storytelling fresh
          while the experience stays familiar.
        </p>
        <Button className="border-white/30 px-5 py-3 text-base">Plan your journey</Button>
      </div>
    </section>
  );
}
