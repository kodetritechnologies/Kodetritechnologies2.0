import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import File from "../models/file.schema.js";

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_api_key,
  api_secret: process.env.cloud_secret,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const uploadMiddleware = upload.fields([
  { name: "featured_image", maxCount: 1 },
  { name: "gallery", maxCount: 30 },
  { name: "document", maxCount: 30 },
]);

const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        resource_type: "auto",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(file.buffer);
  });
};

const generatePayload = (req, file, cloudinaryFile) => {
  const { _id } = req.admin || {};
  const customer = req.customer;
  return {
    filename: file.originalname,
    fieldname: file.fieldname,
    encoding: file.encoding,
    mimetype: file.mimetype,
    url: cloudinaryFile?.secure_url,
    admin: _id || null,
    customer: customer?._id || null,
  };
};

export const fileUploads = async (req) => {
  let fields = req.files;
  const uploadedFiles = {};
  if (fields["featured_image"]) {
    const file = fields?.featured_image[0];
    try {
      const cloudinaryFile = await uploadToCloudinary(file);
      const payload = generatePayload(req, file, cloudinaryFile);
      if (payload) {
        const response = await File.create(payload);
        uploadedFiles.featured_image = response;
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (fields["gallery"]) {
    const result = await Promise.all(
      fields.gallery.map(async (file) => {
        const cloudinaryFile = await uploadToCloudinary(file);
        const payload = generatePayload(req, file, cloudinaryFile);
        const response = await File.create(payload);
        return response;
      })
    );
    uploadedFiles.gallery = result;
  }

  if (fields["document"]) {
    const result = await Promise.all(
      fields.document.map(async (file) => {
        const cloudinaryFile = await uploadToCloudinary(file);
        const payload = generatePayload(req, file, cloudinaryFile);
        const response = await File.create(payload);
        return response;
      })
    );
    uploadedFiles.document = result;
  }
  return uploadedFiles;
};
