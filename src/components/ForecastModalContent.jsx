import { Box, Grid, ModalBody, ModalCloseButton, ModalContent, ModalHeader } from "@chakra-ui/react";
import { Text2 } from "./SmallComponents";
import ForecastModalData from "./ForecastModalData";

const ForecastModalContent = ({ data, day, date }) => {
    return (
        <>
            <ModalContent>
                <ModalHeader className="bg-dark-charcoal"></ModalHeader>
                <ModalCloseButton />

                <ModalBody className="bg-dark-charcoal">
                    <Box className="p-2.5">
                        <Box className="p-[5px] bg-dark-purple text-center rounded-3xl mb-5">
                            <Text2>{date}</Text2>
                            <Text2>{day}</Text2>
                        </Box>

                        <Grid className="grid-cols-2" >
                            <ForecastModalData data={data} />
                        </Grid>
                    </Box>
                </ModalBody>

            </ModalContent>
        </>
    )
}

export default ForecastModalContent;