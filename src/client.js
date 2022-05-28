import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'a58dsl6q',
  dataset: 'production',
  apiVersion: 'v2021-10-21',
  useCdn: true,
  token: 'skxseuFtBm5nk96XXFz60iRZ6OKTS17d9wXv7kbm6D3BSSFWRxbUE20jNRoKoMoLynyqQiqq9ScGkYz4Rfk9lQego3lolefnbzLm7ONCiiz3SKcI9m0IpOXKiy8zNf5QRFvBHgD25y3fP7tY1OG4SaAFVLrRsKfaVZUJ8X8JVyIgQbt5d4Du',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);  