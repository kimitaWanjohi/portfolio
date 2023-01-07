import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    useCdn: import.meta.env.VITE_SANITY_USE_CDN,
    token: import.meta.env.VITE_SANITY_TOKEN,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
});

export const builder = imageUrlBuilder(client);
