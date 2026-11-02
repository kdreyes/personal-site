const long = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const short = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const formatDate = (d: Date) => long.format(d);
export const formatShortDate = (d: Date) => short.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
