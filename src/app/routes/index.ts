import { Router } from "express";
import { AuthRouters } from "../modules/auth/auth.route";
import { UserRouters } from "../modules/user/user.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRouters,
  },
  {
    path: "/auth",
    route: AuthRouters,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// router.use("/user", UserRouters)
// router.use("/tour", TourRouters)