import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'oy9jsbfw',
  dataset: 'production',
  apiVersion: "2023-04-27",
  useCdn: true,
  token: "skWJmYXSlQZsb9apdyc1qQUS9FYJhkChMuwGQ6dvU0ReR4EZpNfDhTGYYaSBYygvMhRnwiz2cx9iebqKjFUJqQxroXtYFaxHbGQU2mkhPdSmRaIUWvYBLoNCWmRXoWibNjEBBhnsYUijol0kLR8YovPO8lNGdJpV33QORCJph2ldAM4zhmea"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);