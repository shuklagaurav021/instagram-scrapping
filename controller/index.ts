import axios from "axios";
import { Response, Request } from "express";
const admin = {
  todoGet: async (req: Request, res: Response): Promise<any> => {
    const {} = req.body;
    var names: any = [];
    var userData = [];
    try {
      const config = {
        headers: {
          "x-requested-with": "XMLHttpRequest",
        },
      };
      const config2 = {
        headers: {
          "x-ig-app-id": "936619743392459",
        },
      };

      for (let i = 1; i <= 20; i++) {
        var collection = await axios(
          `https://hypeauditor.com/top/ajax/?p=${i}`,
          config
        );
        collection.data.result.map((item: any) => {
          names.unshift(item.basic.username);
        });
      }
      for (let j = 0; j <= names.length; ++j) {
        console.log(`Getting data of ${j}`);
        var dataaaa = await axios(
          `https://i.instagram.com/api/v1/users/web_profile_info/?username=${names[j]}`,
          config2
        );
        userData.push(dataaaa.data);
      }
      res.send({ data: names });
    } catch (error: any) {
      console.log({ error: error, message: error.message });
      res
        .status(500)
        .send({
          error: true,
          message: `Error getting the data from database ${error}`,
        });
    }
  },
};

export default admin;
