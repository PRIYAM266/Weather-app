import { Box, Icon, Modal, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { dateFormat } from "../helpers/extraFunctions";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";
import ForecastModalContent from "./ForecastModalContent";


export const ForcastModal = ({ data }) => {

    const { date, day } = dateFormat(data.dt);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box onClick={onOpen} className="cursor-pointer mt-2.5 ">
                <Text className="font-medium text-[27px] text-caribbean-green">
                    <Icon as={ImSun} /> {Math.round(data.temp.day)}<sup>o</sup> C
                </Text>
                <Text className="font-medium text-[27px] text-caribbean-green">
                    <Icon as={MdOutlineNightsStay} /> {Math.round(data.temp.night)}<sup>o</sup> C
                </Text>
                <Text className="font-medium text-xl text-caribbean-green">
                    {data.weather[0].main}
                </Text>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} >

                <ModalOverlay />
                <ForecastModalContent data={data} day={day} date={date} />

            </Modal>
        </>
    );
};

