export function formatLabel(
  template: string,
  values: Record<string, string | number>,
) {
  return Object.entries(values).reduce(
    (label, [key, value]) =>
      label.replaceAll(`{${key}}`, String(value)),
    template,
  );
}
