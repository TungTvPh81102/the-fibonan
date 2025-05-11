export default {
  '*.{ts,tsx,js,json,css}': 'prettier --write',
  '*.{ts,tsx}': (files) => [`eslint --fix ${files.join(' ')}`, 'tsc --noEmit'],
}
