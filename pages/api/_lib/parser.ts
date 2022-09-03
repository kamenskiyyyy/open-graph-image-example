import {NextApiRequest} from "next";
import {ParsedRequest} from "./types";

export function parseRequest(req: NextApiRequest) {
    const { title, desc } = req.query as ParsedRequest;

    return {
        title,
        desc,
    };
}
