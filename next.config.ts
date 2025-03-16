import type { NextConfig } from 'next'
import CopyPlugin from 'copy-webpack-plugin'
import path from 'path'

const nextConfig: NextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		})

		config.plugins.push(
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(
							__dirname,
							'./src/assets/icons/countries',
						),
						to: path.resolve(
							__dirname,
							'./public/icons/countries',
						),
						noErrorOnMissing: true,
					},
				],
			}),
		)

		return config
	},
	experimental: {
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			},
		},
	},
}

export default nextConfig
