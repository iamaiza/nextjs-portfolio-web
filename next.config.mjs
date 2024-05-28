
/** @type {import('next').NextConfig} */
import webpack from 'webpack';

const nextConfig = {
  images: {
    domains: ["shanereact.ibthemespro.com"],
  },
    webpack: (config) => {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        })
      );

      return config;
    },
};

export default nextConfig;
