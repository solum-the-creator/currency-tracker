import path from 'path';
import { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

export function buildResolvers(
  options: BuildOptions,
): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@public': options.paths.public,
      '@components': path.resolve(options.paths.src, 'components'),
      '@styles': path.resolve(options.paths.src, 'styles'),
      '@constants': path.resolve(options.paths.src, 'constants'),
      '@context': path.resolve(options.paths.src, 'context'),
      '@hooks': path.resolve(options.paths.src, 'hooks'),
      '@pages': path.resolve(options.paths.src, 'pages'),
      '@customTypes': path.resolve(options.paths.src, 'types'),
      '@routes': path.resolve(options.paths.src, 'routes'),
      '@utils': path.resolve(options.paths.src, 'utils'),
      '@assets': path.resolve(options.paths.src, 'assets'),
      '@': options.paths.src,
    },
  };
}
