import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from 'sanity:client';
import { defineQuery } from 'groq';

const builder = createImageUrlBuilder(sanityClient);

/** Build an optimized image URL from a Sanity image source (respects hotspot/crop). */
export function urlFor(source: any) {
  return builder.image(source);
}

const imageFields = /* groq */ `
  asset->{
    _id,
    url,
    metadata { lqip, dimensions }
  },
  alt,
  hotspot,
  crop
`;

// Only weddings that actually have a cover photo are shown on the live site,
// so the seeded drafts (no photo yet) never produce a broken tile.
export const WEDDINGS_QUERY = defineQuery(/* groq */ `
  *[_type == "wedding" && defined(coverImage.asset)] | order(order asc, coupleNames asc){
    _id,
    coupleNames,
    "slug": slug.current,
    venue,
    location,
    featured,
    coverImage{ ${imageFields} },
    gallery[]{ _key, ${imageFields} }
  }
`);

export const TESTIMONIALS_QUERY = defineQuery(/* groq */ `
  *[_type == "testimonial"] | order(featured desc, order asc){
    _id,
    coupleNames,
    quote,
    rating,
    location,
    featured
  }
`);

export async function getWeddings() {
  return await sanityClient.fetch(WEDDINGS_QUERY);
}

export async function getTestimonials() {
  return await sanityClient.fetch(TESTIMONIALS_QUERY);
}
