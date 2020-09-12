exports.addNumber = (req, res) => {
  const { num1, num2 } = req.body;
  const add = num1 + num2;

  if (add > 1000000) {
    return res.status(400).json({
      status: `error`,
      message: "Overflow",
    });
  }
  return res.status(200).json({
    status: `Success`,
    message: `the sum of given two number`,
    add,
  });
};

exports.subNumber = (req, res) => {
  const { num1, num2 } = req.body;
  const sub = num1 - num2;

  if (sub < -1000000) {
    return res.status(400).json({
      status: `error`,
      message: "Underflow",
    });
  }
  return res.status(200).json({
    status: `Success`,
    message: `the difference of given two number`,
    sub,
  });
};

exports.multiplyNumber = (req, res) => {
  const { num1, num2 } = req.body;

  const mutiply = num1 * num2;
  if (mutiply > 1000000) {
    return res.status(400).json({
      status: `error`,
      message: "Overflow",
    });
  }
  return res.status(200).json({
    status: `Success`,
    message: `The product of given numbers`,
    mutiply,
  });
};

exports.divisionNumber = (req, res) => {
  const { num1, num2 } = req.body;

  const division = num1 / num2;

  if (num2 == 0) {
    return res.status(400).json({
      status: `error`,
      message: "Cannot divide by zero",
    });
  }
  return res.status(200).json({
    status: `Success`,
    message: `The division of given numbers`,
    division,
  });
};
