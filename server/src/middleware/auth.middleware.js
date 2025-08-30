import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  jwt.verify(token, process.env.AUTH_SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }
    next()
  })

};