import { Box, Text } from "@chakra-ui/react"
import { forecastDetails } from "../constants"
import { Text1 } from "./SmallComponents"

const ForecastModalData = ({ data }) => {
    return (
        <>
            <Box className="pb-2.5 pl-[15%]">
                {forecastDetails.map((e, i) => (
                    <Text key={i} className="text-caribbean-green font-medium mt-[15px] text-lg" >{e}</Text>
                ))}
            </Box>
            <Box className="rounded-3xl bg-dark-purple pb-2.5 pl-[15%]">
                <Text1>{data.feels_like.day}<sup>o</sup> C</Text1>
                <Text1>{data.humidity}%</Text1>
                <Text1>{(data.wind_speed * 3.6).toFixed(2)} Km/h</Text1>
                <Text1>{data.pressure} hPa</Text1>
                <Text1>{data.temp.day}<sup>o</sup> C</Text1>
                <Text1>{data.temp.eve}<sup>o</sup> C</Text1>
                <Text1>{data.temp.night}<sup>o</sup> C</Text1>
                <Text1>{data.temp.min}<sup>o</sup> C</Text1>
                <Text1>{data.temp.max}<sup>o</sup> C</Text1>
            </Box>
        </>
    )
}

export default ForecastModalData;