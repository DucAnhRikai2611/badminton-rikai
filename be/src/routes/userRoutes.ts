import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "User route works!" });
});

export const userRoutes = router;
