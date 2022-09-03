import {ParsedRequest} from "./types";
import {FC} from "react";
import {renderToString} from "react-dom/server";
import {Box, Stack, Typography} from "@mui/material";

export const OGImage: FC<ParsedRequest> = ({title, desc}) => {
    return (
        <Box height='100%' width='100%' bgcolor='#1937ff' display='flex'>
                    <Stack m='auto'>
                        <Typography variant='h1' color='white'>
                            {title}
                        </Typography>
                        <Typography variant='h2' color='white'>
                            {desc}
                        </Typography>
                    </Stack>
        </Box>
    )
}

export function getHtml(parsedReq: ParsedRequest) {
    const { title, desc } = parsedReq;

    return renderToString(<OGImage title={title} desc={desc} />);
}
