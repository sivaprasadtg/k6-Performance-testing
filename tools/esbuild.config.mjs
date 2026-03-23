import { build } from 'esbuild';
import { glob } from 'glob';

const entryPoints = await glob('src/scripts/**/*.ts');

await build({
    entryPoints,
    outdir: 'output',
    outbase: '.',
    bundle: true,
    platform: 'neutral',
    format: 'esm',
    target: ['es2020'],
    sourcemap: true,
    external: ['k6','k6/*']
    });

  console.log(`Build completed. Bundled ${entryPoints.length} scripts.`);
