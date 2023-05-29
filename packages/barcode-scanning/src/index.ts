import { registerPlugin } from '@capacitor/core';

import type { BarcodeScannerPlugin } from './definitions';

const BarcodeScannerML = registerPlugin<BarcodeScannerPlugin>('BarcodeScannerML', {
  web: () => import('./web').then(m => new m.BarcodeScannerWeb()),
});

export * from './definitions';
export { BarcodeScannerML };
