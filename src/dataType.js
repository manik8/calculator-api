exports.dataType = (req, res, next) => {
  const { num1, num2 } = req.body;
  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.status(400).json({
      status: `error`,
      message: "invalid data types",
    });
  }
  next();
};
