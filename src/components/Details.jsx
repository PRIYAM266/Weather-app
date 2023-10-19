import { Box, Flex, Grid, Heading, Icon, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { celsius } from "../helpers/extraFunctions";
import { getItem } from "../helpers/sessionStorage";
import { getWeatherByLocation, syncData } from "../redux/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Map } from "./Map";
import { FaSyncAlt } from "react-icons/fa";
import { Newbox, Text1 } from "./SmallComponents";
import { Forcast } from "./Forecast";
import { temperatureDetails } from "../constants";


export const Details = () => {

    const { isLoading, weatherData: data, forcastData, isError } = useSelector((state) => state, shallowEqual);
    const [isRotate, setIsRotate] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        let weather = getItem("weather");
        !weather && dispatch(getWeatherByLocation(toast));
    }, [dispatch, toast]);

    const handleSyncData = () => {
        setIsRotate(true);
        dispatch(syncData(data.name, toast))
    }

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box className="max-w-[1400px] mx-auto my-5 mt-5 mb-1 p-5 min-h-[550px]">
                <Grid className="gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex">
                    <Newbox >
                        <Box className="p-5 text-center text-caribbean-green">
                            <Flex className="justify-end">
                                <Icon
                                    onClick={handleSyncData}
                                    onAnimationEnd={() => { setIsRotate(false) }}
                                    className={isRotate ? "iconRotate w-[25px] h-[25px]" : undefined}
                                    cursor={'pointer'} as={FaSyncAlt}
                                />
                            </Flex>
                            <Heading>{data.name}</Heading>
                            <Heading fontSize={['100px', '120px', '120px', '100px', '120px']}>{Math.round(data.main.temp - 273)}<sup>o</sup>C</Heading>
                            <Heading>{data.weather[0].main}</Heading>
                        </Box>
                    </Newbox>

                    <Newbox>
                        <Grid className="grid-cols-2 h-full">
                            <Box className="py-2.5 pl-[15%]">
                                {temperatureDetails.map((e, i) => (
                                    <Text key={i} className="text-caribbean-green font-medium text-lg mt-3.5" >{e}</Text>
                                ))}
                            </Box>
                            <Box className="py-2.5 pl-[15%] bg-dark-purple rounded-3xl">
                                <Text1>{celsius(data.main.feels_like)}<sup>o</sup> C</Text1>
                                <Text1>{data.main.humidity}%</Text1>
                                <Text1>{(data.wind.speed * 3.6).toFixed(2)} Km/h</Text1>
                                <Text1>{(data.visibility * 0.001).toFixed(2)} Km</Text1>
                                <Text1>{celsius(data.main.temp_max)}<sup>o</sup> C</Text1>
                                <Text1>{celsius(data.main.temp_min)}<sup>o</sup> C</Text1>
                            </Box>
                        </Grid>
                    </Newbox>

                    <Newbox>
                        <Map city={data.name} />
                    </Newbox>
                </Grid>

                <Grid className="grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mt-10 mb-5 gap-5">
                    {forcastData && forcastData.map((e, i) => <Forcast key={i} data={e} />)}
                </Grid>

                <div>
                    <p className="
                    text-dark-charcoal
                    font-medium
                    overflow-hidden
                    text-center
                    ">Made with ❤️ by Priyam</p>
                </div>
            </Box >
        </>
    );
};






