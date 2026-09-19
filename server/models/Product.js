import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    category: { type: String },
    capacity: { type: String, required: true },
    acType: { type: String, required: true },
    technology: { type: String, required: true },
    starRating: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    description: { type: String, required: true },
    features: [{ type: String }],
    warranty: { type: String },
    installationInfo: { type: String },
    images: [{ type: String }],
    availability: { type: String, default: 'Available' },
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
