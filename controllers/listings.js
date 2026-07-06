const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });

//search functionality for listings
module.exports.index = async (req, res) => {
  const searchQuery = req.query.search;
  const trimmedQuery = searchQuery ? searchQuery.trim() : "";
  const selectedCategory = req.query.category ? req.query.category.trim() : "";

  const conditions = [];

  if (trimmedQuery) {
    const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const searchTerms = trimmedQuery.split(/\s+/).filter(Boolean);

    conditions.push({
      $and: searchTerms.map((term) => ({
        $or: [
          { title: { $regex: escapeRegex(term), $options: "i" } },
          { location: { $regex: escapeRegex(term), $options: "i" } },
          { country: { $regex: escapeRegex(term), $options: "i" } },
          { description: { $regex: escapeRegex(term), $options: "i" } },
        ],
      })),
    });
  }

  if (selectedCategory) {
    conditions.push({ category: selectedCategory });
  }

  const query = conditions.length > 0 ? { $and: conditions } : {};
  const allListings = await Listing.find(query);

  res.render("listings/index.ejs", {
    allListings,
    searchQuery: trimmedQuery,
    selectedCategory,
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you are requesting for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
  const response = await geocodingClient
    .forwardGeocode({ query: req.body.listing.location, limit: 1 })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  let newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url: url, filename: filename };
  newListing.geometry = response.body.features[0].geometry;
  await newListing.save();
  req.flash("success", "New Listing Created Successfully!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Cannot edit a listing that does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing);
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updatedListing.image = { url: url, filename: filename };
    await updatedListing.save();
  }
  if (!updatedListing) {
    req.flash("error", "Cannot update a listing that does not exist!");
    return res.redirect("/listings");
  }
  req.flash("success", "Listing Updated Successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) {
    req.flash("error", "Listing already deleted or not found!");
    return res.redirect("/listings");
  }
  req.flash("success", "Listing deleted Successfully!");
  res.redirect("/listings");
};
