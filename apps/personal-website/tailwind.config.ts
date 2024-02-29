import type { Config } from 'tailwindcss';

import basePreset from '@tools/tailwind';

const config: Config = {
  content: ['./src/**/*.tsx'],
  presets: [basePreset],
};

export default config;
