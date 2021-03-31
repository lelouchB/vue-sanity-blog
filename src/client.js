import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.VUE_APP_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: "2021-03-25"
});
