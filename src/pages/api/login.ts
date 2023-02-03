import { usersMock } from "@/mockups/usersMock";
const bcrypt = require("bcrypt");

export default (
  req: { query: { username: string; password: string } },
  res: {
    status(number: number): any;
    json: (arg0: { redirectURL?: string; text: string }) => void;
  }
) => {
  const {
    query: { username, password },
  } = req;

  const user = usersMock.find((user) => user.username === username);

  const error = {
    text: "Bad pass or username",
  };

  if (user) {
    bcrypt.compare(
      password,
      user.password,
      function (err: any, isValid: boolean) {
        if (isValid) {
          res.json({ text: "Success", redirectURL: "/profile" });
        } else {
          res.status(401).json(error);
        }
      }
    );
  } else {
    res.status(401).json(error);
  }
};
