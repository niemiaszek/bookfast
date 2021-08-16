const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken)
    return res.json({ error: "Użytkownik nie jest zarejestrowany!" });
  try {
    const validToken = verify(accessToken, "secret");
    req.klient_reg = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = { validateToken };
