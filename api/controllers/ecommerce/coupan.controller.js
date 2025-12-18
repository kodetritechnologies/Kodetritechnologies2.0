import mongoose from "mongoose";
import { adminsLogsHelper } from "../../helpers/adminsLogsHelper.js";

import {
  generateOptions,
  GenerateSearchQuery,
} from "../../helpers/mongooseHelper.js";
import { slugGenerator } from "../../helpers/slugGenerator.js";
import Coupan from "../../models/ecommerce/coupan.schema.js";
import CoupanClaim from "../../models/ecommerce/CouponClaim.js";

export const getCoupan = async (req, res) => {
  try {
    const { _id } = req.admin;
    const query = GenerateSearchQuery(req, {
      admin: _id,

      deletedAt: null,
    });
    const options = generateOptions(req);
    const coupan = await Coupan.paginate(query, {
      ...options,
      sort: { createdAt: -1 },
    });

    return res.status(200).json({
      status: "success",
      message: "fetch Coupan successfully",
      data: coupan,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getTrashCoupan = async (req, res) => {
  try {
    const { _id } = req.admin;
    const query = { admin: _id, deletedAt: { $ne: null } };
    const options = generateOptions(req);
    const Coupans = await Coupan.paginate(query, options);

    return res.status(200).json({
      status: "success",
      message: "fetch Trash Coupans successfully",
      data: Coupans,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getCoupanById = async (req, res) => {
  try {
    const { _id } = req.admin;
    const { id } = req.params;
    const query = { _id: id, admin: _id, deletedAt: null };

    const Coupans = await Coupan.findOne(query);

    return res.status(200).json({
      status: "success",
      message: "fetch Coupans successfully",
      data: Coupans,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createCoupan = async (req, res) => {
  try {
    const { _id } = req.admin;
    const data = req.body;
    const slug = await slugGenerator(data.name, Coupan);

    const payload = {
      ...data,
      slug,
      admin: _id,
    };

    const coupan = await Coupan.create(payload);
    await adminsLogsHelper(req, "Coupan create successfully");
    return res.status(201).json({
      status: "success",
      message: "Coupan create successfully",
      data: coupan,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const updateCoupan = async (req, res) => {
  try {
    const { _id } = req.admin;
    const { id } = req.params;
    const payload = req.body;
    const query = {
      _id: id,
      admin: _id,
    };

    const response = await Coupan.findOneAndUpdate(query, payload);
    await adminsLogsHelper(req, "Coupan updated successfully");
    if (response) {
      return res.status(200).json({
        status: "success",
        message: "update successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteCoupan = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.admin;
    const query = { _id: id, admin: _id, deletedAt: null };
    const deleteCoupan = await Coupan.deleteOne(query);

    if (!deleteCoupan) {
      return res.status(404).json({
        status: "error",
        message: "Coupan not found",
      });
    }
    await adminsLogsHelper(req, "Coupan deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "Coupan deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiDeleteCoupan = async (req, res) => {
  try {
    const { _id } = req.admin;
    const ids = req.body;
    const query = {
      admin: _id,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllCoupan = await Coupan.find(query);

    if (!AllCoupan.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Coupan not found",
      });
    }

    await Coupan.deleteMany(query);
    await adminsLogsHelper(req, "All Coupan deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "All Coupan deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Admin customer
export const adminCustomerclaimCoupan = async (req, res) => {
  try {
    const { id } = req.params;
    const {} = req.admin;
    const query = {
      customer: new mongoose.Types.ObjectId(id),
      deletedAt: null,
    };

    const options = generateOptions(req);
    const response = await CoupanClaim.paginate(query, options);
    return res.status(200).json({
      status: "success",
      message: "fetch all customer claim coupan",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Frontend APIs

export const getAllCoupan = async (req, res) => {
  try {
    const query = {
      deletedAt: null,
    };

    const options = generateOptions(req);
    const response = await Coupan.paginate(query, {
      ...options,
      sort: { createdAt: -1 },
    });
    return res.status(200).json({
      status: "success",
      message: "fetch all public coupan",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getCustomerCoupan = async (req, res) => {
  try {
    const { _id } = req.customer;
    const query = {
      customer: _id,

      deletedAt: null,
    };

    const options = generateOptions(req);
    const response = await CoupanClaim.paginate(query, {
      ...options,
      sort: { createdAt: -1 },
    });
    return res.status(200).json({
      status: "success",
      message: "fetch user coupan",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const claimCoupan = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.customer;
    const response = await CoupanClaim.create({
      coupanId: id,
      customer: _id,
    });
    return res.status(200).json({
      status: "success",
      message: "Coupon claimed successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
