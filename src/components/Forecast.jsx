import { Box } from "@chakra-ui/react";
import { ForcastBox, Text2 } from "./SmallComponents";
import { dateFormat } from "../helpers/extraFunctions";
import { ForcastModal } from "./ForecastModal";

export const Forcast = ({ data }) => {

    const { date, day } = dateFormat(data.dt);

    return (
        <Box>
            <ForcastBox >

                <Box className="bg-dark-purple p-[5px]">
                    <Text2>{date}</Text2>
                    <Text2>{day}</Text2>
                </Box>

                <ForcastModal data={data} />

            </ForcastBox>
        </Box>
    );
};