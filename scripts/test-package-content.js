import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';

const expectedFiles = [
  'LICENSE',
  'README.md',
  'build/components/index.d.ts',
  'build/components/milestones/defaults.d.ts',
  'build/components/milestones/index.d.ts',
  'build/components/milestones/milestones.d.ts',
  'build/components/milestones/types.d.ts',
  'build/index.d.ts',
  'build/index.es.js',
  'build/index.es.js.map',
  'build/index.js',
  'build/index.js.map',
  'package.json',
];

const packageFiles = () => {
  const output = execFileSync(
    'npm',
    ['pack', '--dry-run', '--json', '--ignore-scripts'],
    { encoding: 'utf8' }
  );
  const result = JSON.parse(output);
  return result[0].files.map(({ path }) => path).sort();
};

const assertFiles = (actual, description) => {
  const expected = [...expectedFiles].sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.error(`${description} package content mismatch.`);
    console.error('Expected:', expected);
    console.error('Actual:', actual);
    process.exit(1);
  }
};

const cleanFiles = packageFiles();
assertFiles(cleanFiles, 'Clean build');

mkdirSync('build', { recursive: true });
writeFileSync('build/example_boilplate.js', 'obsolete artifact');
writeFileSync('build/stale.js', 'stale artifact');
execFileSync('yarn', ['build'], { stdio: 'inherit' });

const dirtyFiles = packageFiles();
assertFiles(dirtyFiles, 'Dirty build');

if (JSON.stringify(cleanFiles) !== JSON.stringify(dirtyFiles)) {
  console.error('Clean and dirty builds produced different package content.');
  process.exit(1);
}

console.log(`Package content verified: ${dirtyFiles.length} intended files.`);
