import client from "./client";

const endPoints = "/listings";

const addListings = (
  listing: any,
  onUploadProgress: (progress: any) => void
) => {
  // const data: any = new FormData();

  const data = {
    title: listing.title,
    categoryId: listing.categoryId,
    price: listing.price,
    description: listing.description,
    image: listing.images[0],
    location: JSON.stringify(listing.location),
  };

  // data.append("title", listing.title);
  // data.append("categoryId", listing.category.id);
  // data.append("price", listing.price);
  // data.append("description", listing.description);
  // data.append("image", {
  //   name: "image" + Math.random(),
  //   type: "image/jpeg",
  //   uri: listing.images[0],
  // });
  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));

  return client.post(
    endPoints,
    {
      data: {
        data,
      },
    },
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    }
  );
};

const getListings = () => client.get(endPoints);

export default {
  addListings,
  getListings,
};
