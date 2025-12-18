import Status from "../../../models/configuration/master/status.schema.js";

export const getStatusByType = async (req, res) => {
  try {
    const { type } = req.params;

    const statusType = await Status.find({
      type,
      deletedAt: null,
    });

    if (!statusType || statusType.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No status found for this type",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Status fetched successfully by type",
      data: statusType,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
