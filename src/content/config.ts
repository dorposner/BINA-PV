import { z, defineCollection } from 'astro:content';

const eventsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        time: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
        registrationLink: z.string().url().optional().or(z.literal('')),
    }),
});

const recommendationsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        imageGallery: z.array(z.string()).optional(),
        googleMapsEmbed: z.string().optional(),
        externalLink: z.string().url().optional().or(z.literal('')),
    }),
});

export const collections = {
    'events': eventsCollection,
    'recommendations': recommendationsCollection,
};
