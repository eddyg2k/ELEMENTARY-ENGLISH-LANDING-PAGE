export type LayerMotion = {
  translate: string;
  blur: string;
  opacity: string;
};

export function buildLayerMotion(index: number, total: number): LayerMotion {
  const depthRatio = (total - index) / total;
  return {
    translate: `translateY(${depthRatio * 12}%)`,
    blur: `blur(${Math.max(0, (index - 1) * 2)}px)`,
    opacity: `${1 - depthRatio * 0.2}`
  };
}

export function classNames(...tokens: Array<string | undefined | false>) {
  return tokens.filter(Boolean).join(' ');
}
