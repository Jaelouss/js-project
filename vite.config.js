import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
	root: 'src',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			input: glob.sync('./src/*.html'),
			output: {
				entryFileNames: '[name].js',
				assetFileNames: '[name][extname]',
			},
		},
	},
	define: {
		global: 'window',
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use "/scss/variables.scss";
				@use "/scss/utils.scss";
				@use "/scss/helpers/functions.scss";
				@use "/scss/helpers/media.scss";
				@use "/scss/helpers/mixins.scss";
				`,
			},
		},
	},
	plugins: [
		injectHTML(),
		FullReload(['./src/**/**.html']),
		imagemin({
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				quality: [0.7, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								cleanupIds: false,
							},
						},
					},
					{
						name: 'removeViewBox',
						active: false,
					},
				],
			},
			webp: {
				quality: 80,
			},
		}),
	],
	server: {
		open: true,
	},
});
